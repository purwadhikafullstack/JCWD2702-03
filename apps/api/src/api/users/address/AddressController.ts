import { Request, Response, NextFunction } from 'express';
import { CreateAddressServices } from './AddressServices';
import axios from 'axios';

export const CreateAddress = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { province, city, address, zip_code, phone_number } = req.body;

    const result = await CreateAddressServices({
      province,
      city,
      address,
      zip_code,
      phone_number,
    });

    res.status(200).send({
      error: false,
      massage: 'Create Address Success!',
      data: result,
    })
  } catch (error) {
    next(error);
  }
};

// const RAJAONGKIR_API_KEY = process.env.RAJAONGKIR_API_KEY;

// export const getProvince = async(req: Request,
//   res: Response,
//   next: NextFunction,) => {
//   try {
//     const result = await axios.get('https://api.rajaongkir.com/starter/province', {
//       headers: {
//         key: RAJAONGKIR_API_KEY
//       }
//     })

//     res.status(200).send({
//       error: false,
//       message: 'Get Province Success!',
//       data: result.data.rajaongkir.results
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// export const getCity = async(req: Request,
//   res: Response,
//   next: NextFunction,) => {
//    try {
//     const request = await axios.get('https://api.rajaongkir.com/starter/city', {
//       headers: {
//         key: RAJAONGKIR_API_KEY
//       }
//     })
    
//     res.status(200).send({
//       error: false,
//       message: 'Get City Success!',
//       data: request.data.rajaongkir.results
//     })
//    } catch (error) {
//     next(error)
//    }
//   }
