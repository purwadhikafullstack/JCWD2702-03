import { Request, Response, NextFunction } from 'express';
import { deletedUploadFileProduct } from '@/helpers/product/DeletedFileProduct';
import {
  createProductQuery,
  deletedProductQuery,
  findProductQuery,
  findProductByIdQuery,
  updateProductQuery,
  filterProductQuery,
} from './ProductServices';
import prisma from '@/prisma';

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const data = JSON.parse(req.body.data);
  try {
    if (req.files) {
      const uploadFile = Array.isArray(req.files)
        ? req.files
        : req.files['image_product'];
      await createProductQuery(data, uploadFile);
    }
    res.status(201).send({
      error: false,
      message: 'Create Product Success!',
      data: null,
    });
  } catch (error) {
    deletedUploadFileProduct(req.files);
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const data = JSON.parse(req.body.data);
  const { id } = req.params;
  try {
    let resultProduct;
    if (req.files) {
      const uploadFile = Array.isArray(req.files)
        ? req.files
        : req.files['image_product'];
      resultProduct = await updateProductQuery(data, uploadFile, id);
      deletedUploadFileProduct({ image_product: resultProduct });
    }
    res.status(201).send({
      error: false,
      message: 'Update Product Success!',
      data: resultProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const findProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await findProductQuery();
    const productCount = await prisma.product.count({
      where: {
        deletedAt: null,
      },
    });
    res.status(200).send({
      count: productCount,
      error: false,
      message: 'Find Product Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const filterProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productName = req.query.productName as string | undefined;
    const category = req.query.category as string | undefined;
    const page = req.query.page as any;
    const result = await filterProductQuery(productName, category, page);
    const productCount = await prisma.product.count({
      where: {
        deletedAt: null,
      },
    });
    res.status(200).send({
      count: productCount,
      error: false,
      message: 'Filter Product Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await findProductByIdQuery(id);
    res.status(200).send({
      error: false,
      message: 'Find Product Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deletedProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await deletedProductQuery(id);

    res.status(201).send({
      error: false,
      message: 'Deleted Product Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
