import { Request, Response, NextFunction } from 'express';
import {
  CreateUserServiceWithGoogle,
  CreateUserServices,
  createResetPasswordService,
  findResetPasswordServices,
  findUsersByEmailServices,
  getUserUidService,
  passwordService,
  udpateResetPasswordService,
} from './UsersServices';
import { HashPassword } from '../../helpers/Hashing';
import { createToken, createVerificationToken } from '@/helpers/Token';
import fs from 'fs';
import { TransporterNodeMailer } from '@/helpers/TransporterMailer';
import Handlebars from 'handlebars';
import { IReqAccessToken } from '@/helpers/Token';
import { findUsersByUid } from '../auth/login/LoginServices';
import { defaultResetPassword } from '@/helpers/DefaultExpiredAt';

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

    const accessToken = await createVerificationToken({
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
    await passwordService({
      uid,
      password: hashedPassword,
    });

    // await udpateResetPasswordService({
    //   uid,
    // });

    res.status(200).send({
      error: false,
      message: 'Verify Password Account Success!',
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
    if (findEmailResult?.googleAuth === 'FALSE')
      throw new Error('Please Login with Email!');

    if (!findEmailResult) {
      const { createUserWithGoogle } =
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
        message: 'Create Account Success!',
        data: {
          accesstoken,
          email: createUserWithGoogle.email,
          firstName: createUserWithGoogle.firstName,
          lastName: createUserWithGoogle.lastName,
          roleId: createUserWithGoogle.roleId,
        },
      });
    }

    const accesstoken = await createToken({ uid: findEmailResult.uid });;
    
    return res.status(200).send({
      error: false,
      message: 'Login Success!',
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

export const resetPasswordVerification = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqPayload = req as IReqAccessToken;
    const { uid } = reqPayload.payload;
    const findUserByUidResult = await findUsersByUid({ uid });
    const expiredHours = defaultResetPassword(1);
    const currentTime = defaultResetPassword(0);
    const findResetPasswordResult = await findResetPasswordServices({ uid });

    if (findResetPasswordResult) {
      if (
        currentTime <= findResetPasswordResult.expiredAt &&
        findResetPasswordResult.status !== 'DONE'
      )
        throw new Error('Your Link Have Already Sent!');
    }

    const accessToken = await createVerificationToken({
      uid: findUserByUidResult?.uid!,
    });

    const activationLink = `http://localhost:3000/auth/resetPasswordVerify/${accessToken}`;
    const verificationHTML = fs.readFileSync(
      'src/template/ResetPasswordVerification.html',
      'utf-8',
    );
    let verificationHTMLCompailed: any =
      await Handlebars.compile(verificationHTML);
    verificationHTMLCompailed = verificationHTMLCompailed({
      link: activationLink,
    });

    TransporterNodeMailer.sendMail({
      from: 'VOC-Mart',
      to: findUserByUidResult?.email,
      subject: 'Reset Password Verification',
      html: verificationHTMLCompailed,
    });

    await createResetPasswordService({
      uid,
      date: expiredHours.toISOString(),
    });
    
    res.status(200).send({
      error: false,
      message: 'Link Reset Password has been Sent!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserUid = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqPayload = req as IReqAccessToken;
    const { uid } = reqPayload.payload;

    const getUserUidResult = await getUserUidService({ uid });

    res.status(200).send({
      error: false,
      message: "Get User Success!",
      data: getUserUidResult
    })
  } catch (error) {
    next(error)
  }
}
