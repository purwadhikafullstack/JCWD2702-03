import { NextFunction, Request, Response } from 'express';
import { ComparePassword } from '@/helpers/Hashing';
import { IReqAccessToken, createToken } from '@/helpers/Token';
import { findUsersByEmail, findUsersByUid } from './LoginServices';

export const loginUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const findUsersByEmailResult = await findUsersByEmail({ email });

    if (!findUsersByEmailResult) throw new Error('User not found!');
    if(findUsersByEmailResult.verify !== 'VERFIY') throw new Error('Please Verify Your Email First!')

    const accessToken = await createToken({ uid: findUsersByEmailResult.uid });

    // if(findUsersByEmailResult.googleAuth === 'TRUE') {
      
    //   })
    // }
    

    const comparePasswordResult = await ComparePassword({
      passwordFromClient: password, passwordFromDatabase: findUsersByEmailResult?.password!})

    if (!comparePasswordResult) throw new Error('Password not match!');
    
    

    res.status(200).send({
      error: false,
      message: 'Login Success!',
      data: {
        accessToken,
        email: findUsersByEmailResult.email,
        firstName: findUsersByEmailResult.firstName,
        lastName: findUsersByEmailResult.lastName,
        roleId: findUsersByEmailResult.roleId
      },
    })

  } catch (error) {
    next(error);
  }
};


export const keepLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqToken = req as IReqAccessToken
    const { uid } = reqToken.payload

    const findUserByUidResult = await findUsersByUid({uid})
    if(!findUserByUidResult) throw new Error('User not found!')
  
        res.status(200).send({
          error: false,
          message: 'Keep Login Success!',
          data: {
            email: findUserByUidResult.email,
            firstName: findUserByUidResult.firstName,
            lastName: findUserByUidResult.lastName,
            roleId: findUserByUidResult.roleId
          }
        })
  }catch(error){
    next(error)
  }
}