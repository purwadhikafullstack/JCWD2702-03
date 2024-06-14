import { Request, Response, NextFunction } from 'express';
import {
  createStoreQuery,
  deleteStoreQuery,
  findAllStoreQuery,
  findStoreByIdQuery,
  updateStoreQuery,
} from './StoreServices';

export const createStore = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, province, city, address, zip_code, latitude, longitude } =
    req.body;
  try {
    const result = await createStoreQuery({
      name,
      province,
      city,
      address,
      zip_code,
      latitude,
      longitude,
    });
    res.status(201).send({
      error: false,
      message: 'Create Store Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const updateStore = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { name, province, city, address, zip_code, latitude, longitude } =
    req.body;
  try {
    const result = await updateStoreQuery(id, {
      name,
      province,
      city,
      address,
      zip_code,
      latitude,
      longitude,
    });
    res.status(201).send({
      error: false,
      message: 'Update Store Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findStoreById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await findStoreByIdQuery(id);
    res.status(200).send({
      error: false,
      message: 'Find Store Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findAllStore = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await findAllStoreQuery();
    res.status(200).send({
      error: false,
      message: 'Find Store Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deletedStore = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    await deleteStoreQuery(id);
    res.status(201).send({
      error: false,
      message: 'Deleted Store Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
