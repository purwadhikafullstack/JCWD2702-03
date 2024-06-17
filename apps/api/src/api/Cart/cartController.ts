// server/controllers/cartController.ts
import { Request, Response, NextFunction } from 'express';
import cartService from './cartServices'; // Perbaiki impor ini

export const getUserCartProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const cartProducts = await cartService.getUserCartProducts(userId);
    res.status(200).json(cartProducts);
  } catch (error) {
    next(error);
  }
};

export const getCartItems = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId = req.params.userId; // Ambil userId dari URL
    const cartItems = await cartService.getCartItems(userId);
    res.status(200).json(cartItems);
  } catch (error) {
    next(error);
  }
};

export const addToCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { userId, productId, quantity } = req.body;
    const addedItem = await cartService.addToCart(userId, productId, quantity);
    res.status(201).json(addedItem);
  } catch (error) {
    next(error);
  }
};

export const updateCartQuantity = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const cartId = parseInt(req.params.cartId, 10); // Convert to number
    const newQuantity = req.body.newQuantity; // Correctly retrieve newQuantity
    const updatedItem = await cartService.updateCartQuantity(
      cartId,
      newQuantity,
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
};

export const removeFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const cartId = parseInt(req.params.cartId, 10); // Ambil cartId dari URL
    await cartService.removeFromCart(cartId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};