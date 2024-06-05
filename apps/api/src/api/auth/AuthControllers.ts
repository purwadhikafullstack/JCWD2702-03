import { NextFunction, Request, Response } from 'express';
import { findUsersByEmail } from './AuthServices';
import { ComparePassword } from '@/helpers/Hashing';
import { createToken } from '@/helpers/Token';

export const loginUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    const findUsersByEmailResult = await findUsersByEmail({ email });

    const comparePasswordResult = await ComparePassword({
      passwordFromClient: password, passwordFromDatabase: findUsersByEmailResult.password})

    if (!comparePasswordResult) throw new Error('Password not match!');
    
    const accessToken = await createToken({ uid: findUsersByEmailResult.uid });

    res.status(200).send({
      error: false,
      message: 'Login Success!',
      data: {
        accessToken,
      },
    })

  } catch (error) {
    next(error);
  }
};
