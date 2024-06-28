import { Request, Response, NextFunction } from 'express';
import { findUsersByUidServices } from '@/api/users/UsersServices';

interface IReqPayLoad extends Request {
  payload: any;
}

export const roleVerify = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqPayload = req as IReqPayLoad;
    const payload = reqPayload.payload;

    const result = await findUsersByUidServices({ uid: payload.uid });
    if (!result) throw new Error('User Not Found!');
    const authorized = [1];
    if (authorized.includes(result.roleId)) {
    } else {
      throw new Error('Unauthorized User');
    }
  } catch (error) {
    next(error);
  }
};
