import { Request, Response, NextFunction } from 'express';
import {
  createStockQuery,
  deleteStockQuery,
  findStockQuery,
  findStockByIdQuery,
  updateStockQuery,
  filterStockQuery,
} from './StockServices';
import prisma from '@/prisma';

export const createStock = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { stock, productId, storeId } = req.body;
  try {
    const result = await createStockQuery({ stock, productId, storeId });
    res.status(201).send({
      error: false,
      message: 'Create Stock Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const updateStock = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { stock, productId, storeId } = req.body;
  try {
    const result = await updateStockQuery(id, { stock, productId, storeId });
    res.status(201).send({
      error: false,
      message: 'Update Stock Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findStockById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await findStockByIdQuery(id);
    res.status(200).send({
      error: false,
      message: 'Find Stock Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findStock = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await findStockQuery();
    const stockCount = await prisma.stockProduct.count({
      where: {
        deletedAt: null,
      },
    });
    res.status(200).send({
      count: stockCount,
      error: false,
      message: 'Find Stock Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const filterStok = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const asc = req.query.asc as string | undefined;
  const desc = req.query.desc as string | undefined;
  const page = req.query.page as any;
  try {
    const result = await filterStockQuery(asc, desc, page);
    const stockCount = await prisma.stockProduct.count({
      where: {
        deletedAt: null,
      },
    });
    res.status(200).send({
      count: stockCount,
      error: false,
      message: 'Filter Stock Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteStock = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    await deleteStockQuery(id);
    res.status(201).send({
      error: false,
      message: 'Delete Stock Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
