import { Request, Response, NextFunction } from 'express';
import { CreateAddressServices } from './AddressServices';

export const CreateAddress = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { province, city, address, zip_code, phone_number } = req.body;

    await CreateAddressServices({
      province,
      city,
      address,
      zip_code,
      phone_number,
    });

    res.status(200).send({
      error: false,
      massage: 'Create Address Success!',
      data: null,
    })
  } catch (error) {
    next(error);
  }
};
