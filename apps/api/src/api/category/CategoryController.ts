import { Response, Request, NextFunction } from 'express';
import {
  CreateCategorySevices,
  DeletedCategoryServices,
  FindAllCategoryServices,
  UpdateCategoryServices,
} from './CategoryServices';

export const CreateCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name } = req.body;
  try {
    const result = await CreateCategorySevices(name);
    res.status(201).send({
      error: false,
      message: 'Create Category Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UpdateCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await UpdateCategoryServices(id, name);
    res.status(201).send({
      error: false,
      message: 'Update Category Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const FindAllCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await FindAllCategoryServices();
    res.status(200).send({
      error: false,
      message: 'Find Category Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const DeletedCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.body;
  try {
    await DeletedCategoryServices(id);
    res.status(201).send({
      error: false,
      message: 'Deleted Category Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
