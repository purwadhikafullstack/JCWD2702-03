import { Request, Response, NextFunction } from 'express';
import { deletedUploadFile } from '../../helpers/UserProfile/DeletedProfileFile';
import {
  createProductServices,
  deletedProductServices,
  findAllAndFilterProductServices,
  findProductByIdServices,
} from './ProductServices';
import { updateProductServices } from './ProductServices';

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const data = JSON.parse(req.body.data);
  try {
    if (req.files) {
      const uploadFile = Array.isArray(req.files)
        ? req.files
        : req.files['product_images'];
      await createProductServices(data, uploadFile);
    }
    res.status(201).send({
      error: false,
      message: 'Create Product Success!',
      data: null,
    });
  } catch (error) {
    console.log(error);
    deletedUploadFile(req.files);
    next(error);
  }
};

export const updateProductController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const data = JSON.parse(req.body.data);
  const { id } = req.params;
  try {
    if (req.files) {
      const uploadFile = Array.isArray(req.files)
        ? req.files
        : req.files['product_images'];
      const resultProduct = await updateProductServices(data, uploadFile, id);
      deletedUploadFile({ product_images: resultProduct });
    }
    res.status(201).send({
      error: false,
      message: 'Update Product Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const findAllAndFilterProductController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const productName = req.query.productName as string | undefined;
  // const page = req.query.page as any;
  try {
    const result = await findAllAndFilterProductServices(productName);
    res.status(200).send({
      error: false,
      message: 'Find Product Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findProductByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await findProductByIdServices(id);
    res.status(200).send({
      error: false,
      message: 'Find Product Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deletedProductController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await deletedProductServices(id);

    res.status(201).send({
      error: false,
      message: 'Deleted Product Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
