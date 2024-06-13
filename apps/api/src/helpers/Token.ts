import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
dotenv.config();

export const createToken = ({uid}: {uid: string}) => {
  return jwt.sign({uid}, process.env.JWT_SECRET_KEY as string, {
    expiresIn: '1d'
  })
}

export const emailVerificationToken = ({uid}: {uid: string}) => {
  return jwt.sign({uid}, process.env.JWT_SECRET_KEY as string, {
    expiresIn: '1h'
  })
}

export interface IReqAccessToken extends Request{
  payload: any,
  headers: {
    accesstoken: string
  }
}

export const tokenVerify = (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqToken = req as IReqAccessToken
    const { accesstoken } = reqToken.headers;
    
    if(!accesstoken) throw new Error('Token must Provided!')

    const decodePayload = jwt.verify(accesstoken as string,"JCWD2702-3" )
    
    reqToken.payload = decodePayload
    next()
  } catch (error) {
    next(error)
  }
}