import { Request, Response, NextFunction } from 'express';
import {
  CreateUserServiceWithGoogle,
  CreateUserServices,
  findUsersByEmailServices,
} from './UsersServices';
import { ComparePassword, HashPassword } from '../../helpers/Hashing';
import { createToken, emailVerificationToken } from '@/helpers/Token';
import fs from 'fs';
import { TransporterNodeMailer } from '@/helpers/TransporterMailer';
import Handlebars from 'handlebars';
import { IReqAccessToken } from '@/helpers/Token';
import prisma from '@/prisma';

export const registerUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, firstName, lastName } = req.body;
    const findEmailResult = await findUsersByEmailServices({ email });

    if (findEmailResult) throw new Error('Email Already Exist!');

    const createdNewDataUsers = await CreateUserServices({
      email,
      firstName,
      lastName,
    });

    const accessToken = await emailVerificationToken({
      uid: createdNewDataUsers.uid,
    });
    const activationLink = `http://localhost:3000/auth/verify/${accessToken}`;

    const verificationHTML = fs.readFileSync(
      'src/template/Verification.html',
      'utf-8',
    );
    let verificationHTMLCompailed: any =
      await Handlebars.compile(verificationHTML);
    verificationHTMLCompailed = verificationHTMLCompailed({
      username: firstName + ' ' + lastName,
      link: activationLink,
    });

    TransporterNodeMailer.sendMail({
      from: 'VOC-Mart',
      to: email,
      subject: 'Activate Your Account!',
      html: verificationHTMLCompailed,
    });

    res.status(200).send({
      error: false,
      message: 'Create Account Success! Verification Email has been sent!',
      data: createdNewDataUsers,
    });
  } catch (error) {
    next(error);
  }
};

export const passwordVerification = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqPayload = req as IReqAccessToken;
    const { uid } = reqPayload.payload;
    const { password, confirmPassword } = req.body;

    if (password != confirmPassword) throw new Error('Password not match!');

    const hashedPassword = await HashPassword({ password });
    await prisma.user.update({
      where: {
        uid,
      },
      data: {
        password: hashedPassword,
        verify: 'VERFIY',
      },
    });

    res.status(200).send({
      error: false,
      message: 'Verify Account Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const registerUserWithGoogle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, fullname, uid } = req.body;

    const splitFullname = fullname.split(' ');

    const findEmailResult = await findUsersByEmailServices({ email });
    if(findEmailResult?.googleAuth === 'FALSE') throw new Error('Please Login with Email!');

    if (!findEmailResult) {
      const { createUserWithGoogle, createProfile } =
        await CreateUserServiceWithGoogle({
          email,
          fullname,
          uid,
          firstName: splitFullname[0],
          lastName: splitFullname[1],
        });
      const accesstoken = await createToken({ uid: createUserWithGoogle.uid });

      return res.status(200).send({
        error: false,
        message: 'Login Success!',
        data: {
          accesstoken,
          email: createUserWithGoogle.email,
          firstName: createUserWithGoogle.firstName,
          lastName: createUserWithGoogle.lastName,
          roleId: createUserWithGoogle.roleId,
        },
      });
    }

    const accesstoken = await createToken({ uid: findEmailResult.uid });

    return res.status(200).send({
      error: false,
      message: 'Create Account Success!',
      data: {
        accesstoken,
        email: findEmailResult.email,
        firstName: findEmailResult.firstName,
        lastName: findEmailResult.lastName,
        roleId: findEmailResult.roleId,
      },
    });
  } catch (error) {
    next(error);
  }
};
