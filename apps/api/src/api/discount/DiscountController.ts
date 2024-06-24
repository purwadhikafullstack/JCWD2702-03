import { Request, Response, NextFunction } from 'express';
import {
  createDiscountQuery,
  findByIdDiscountQuery,
  findDiscountQuery,
  updateDiscountQuery,
} from './DiscountServices';

export const createDiscount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { code, pieces, expired, min_pay } = req.body;
  try {
    const result = await createDiscountQuery({
      code,
      pieces,
      expired,
      min_pay,
    });
    res.status(201).send({
      error: false,
      message: 'Create Discount Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const updateDiscount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { code, pieces, expired, min_pay } = req.body;
  try {
    const result = await updateDiscountQuery(
      { id },
      { code, pieces, expired, min_pay },
    );
    res.status(201).send({
      error: false,
      message: 'Update Discount Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findDiscount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await findDiscountQuery();
    res.status(200).send({
      error: false,
      message: 'Find Discount Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const findByIdDiscount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await findByIdDiscountQuery({ id });
    res.status(200).send({
      error: false,
      message: 'Find Discount Success!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
