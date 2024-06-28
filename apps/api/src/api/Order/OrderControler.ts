// server/controllers/orderController.ts
import { Request, Response, NextFunction } from 'express';
import orderService from './OrderServices';

export const showAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const warehouseId = req.query.warehouseId as string;
    const orders = warehouseId
      ? await orderService.getOrdersByWarehouse(warehouseId)
      : await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const confirmPayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { orderId, accepted } = req.body;
    const updatedOrder = await orderService.confirmOrderPayment(orderId, accepted);
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

export const sendUserOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { orderId } = req.body;
    const updatedOrder = await orderService.sendOrder(orderId);
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

export const cancelUserOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { orderId } = req.body;
    const cancelledOrder = await orderService.cancelOrder(orderId);
    res.status(200).json(cancelledOrder);
  } catch (error) {
    next(error);
  }
};
