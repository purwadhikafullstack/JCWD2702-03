import { Response, Request, NextFunction } from 'express';
import {
  CreateCategoryQuery,
  DeletedCategoryQuery,
  FindCategoryQuery,
  FindCategoryByIdQuery,
  UpdateCategoryQuery,
  FilterCategoryQuery,
} from './CategoryServices';
import { deletedUploadFileCategory } from '@/helpers/category/DeletedFileCategory';
import prisma from '@/prisma';

export const CreateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const data = JSON.parse(req.body.data);
  let result;
  try {
    if (req.files) {
      const uploadFile = Array.isArray(req.files)
        ? req.files
        : req.files['image_category'];
      result = await CreateCategoryQuery(data, uploadFile);
    }

    res.status(201).send({
      error: false,
      message: 'Create Category Success!',
      data: result,
    });
  } catch (error) {
    deletedUploadFileCategory(req.files);
    next(error);
  }
};

export const UpdateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const data = JSON.parse(req.body.data);
  try {
    if (req.files) {
      const uploadFile = Array.isArray(req.files)
        ? req.files
        : req.files['image_category'];
      const result = await UpdateCategoryQuery(data, uploadFile, id);
      deletedUploadFileCategory({ image_category: result });
    }
    res.status(201).send({
      error: false,
      message: 'Update Category Success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const FindCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await FindCategoryQuery();
    const categoryCount = await prisma.productCategory.count({
      where: {
        deletedAt: null,
      },
    });
    res.status(200).send({
      count: categoryCount,
      error: false,
      message: 'Find Category Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const FilterCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const page = req.query.page as any;
  try {
    const result = await FilterCategoryQuery(page);
    const categoryCount = await prisma.productCategory.count({
      where: {
        deletedAt: null,
      },
    });
    res.status(200).send({
      count: categoryCount,
      error: false,
      message: 'Filter Category Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const FindCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await FindCategoryByIdQuery(id);
    res.status(200).send({
      error: false,
      message: 'Find Category Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const DeletedCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    await DeletedCategoryQuery(id);
    res.status(201).send({
      error: false,
      message: 'Deleted Category Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
