import { Request, Response, NextFunction } from 'express';
import {
  CreateAddressServices,
  getAddressService,
  deleteAddressServices,
  setMainAddressServices,
} from './AddressServices';
import { IReqAccessToken } from '@/helpers/Token';

export const CreateAddress = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqPayload = req as IReqAccessToken;
    const { uid } = reqPayload.payload;
    const { receipents, province, city, address, zip_code, phone_number } =
      req.body;

    const result = await CreateAddressServices({
      receipents,
      province,
      city,
      address,
      userUid: uid,
      zip_code,
      phone_number,
    });

    res.status(200).send({
      error: false,
      massage: 'Create Address Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAddress = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqPayload = req as IReqAccessToken;
    const { uid } = reqPayload.payload;

    const getAddressResult = await getAddressService(uid);
    console.log(getAddressResult);

    res.status(200).send({
      error: false,
      massage: 'Get Address Success!',
      data: getAddressResult,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAddress = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.query;
    const deleteAddressResult = await deleteAddressServices(Number(id));

    res.status(200).send({
      error: false,
      massage: 'Delete Address Success!',
      data: deleteAddressResult,
    });
  } catch (error) {
    next(error);
  }
};

export const setMainAddress = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqPayload = req as IReqAccessToken;
    const { uid } = reqPayload.payload;

    const { id } = req.query;
    await setMainAddressServices(Number(id), uid);

    res.status(200).send({
      error: false,
      massage: 'Set Main Address Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
