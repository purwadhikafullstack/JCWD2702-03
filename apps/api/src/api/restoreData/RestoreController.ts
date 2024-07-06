import { Request, Response, NextFunction } from 'express';
import {
  findRestoreDataCategoryQuery,
  findRestoreDataProductQuery,
  findRestoreDataStoreQuery,
  restoreDataCategoryByIdQuery,
  restoreDataCategoryQuery,
  restoreDataProductByIdQuery,
  restoreDataQuery,
  restoreDataStoreByIdQuery,
  restoreDataStoreQuery,
} from './RestoreServices';

export const findRestoreProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await findRestoreDataProductQuery();
    res.status(200).send({
      error: false,
      message: 'Find Data Restore Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const restoreProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await restoreDataQuery();
    res.status(201).send({
      error: false,
      message: 'Restore Data Product Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const restoreProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await restoreDataProductByIdQuery(id);
    res.status(201).send({
      error: false,
      message: 'Restore Data Product Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findRestoreStore = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await findRestoreDataStoreQuery();
    res.status(200).send({
      error: false,
      message: 'Find Data Restore Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const restoreStore = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await restoreDataStoreQuery();
    res.status(201).send({
      error: false,
      message: 'Restore Data Store Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const restoreStoreById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await restoreDataStoreByIdQuery(id);
    res.status(201).send({
      error: false,
      message: 'Restore Data Store Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findRestoreCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await findRestoreDataCategoryQuery();
    res.status(200).send({
      error: false,
      message: 'Find Data Restore Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const restoreCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await restoreDataCategoryQuery();
    res.status(201).send({
      error: false,
      message: 'Restore Data Category Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const restoreCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await restoreDataCategoryByIdQuery(id);
    res.status(201).send({
      error: false,
      message: 'Restore Data Category Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
