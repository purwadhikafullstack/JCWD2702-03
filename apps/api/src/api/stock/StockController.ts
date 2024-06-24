import { Request, Response, NextFunction } from 'express';
import {
  createStockQuery,
  deleteStockQuery,
  findAllStockQuery,
  findStockByIdQuery,
  updateStockQuery,
} from './StockServices';

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

export const findAllStock = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await findAllStockQuery();
    res.status(200).send({
      error: false,
      message: 'Find All Stock Success!',
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
