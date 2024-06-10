import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const respHandler = require("../utils/respHandler"); 

const prisma = new PrismaClient();

// Helper function to get user id from dataToken
const getUserIdFromToken = (req: Request): string | undefined => {
  return req.dataToken?.id;
};

// Get all products in the cart
export const getCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const data = await prisma.cart.findMany({
      where: { userUid: userId },
      include: { product: true },
    });

    respHandler(res, "Get products in cart success", data);
  } catch (error) {
    next(error);
  }
};

// Add a product to the cart
export const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId, quantity, totalStocks } = req.body;
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const existingCart = await prisma.cart.findUnique({
      where: { userUid_productId: { userUid: userId, productId } },
    });

    if (existingCart) {
      const updatedQuantity = existingCart.quantity + quantity;

      if (updatedQuantity > totalStocks) {
        return res.status(400).json({ message: `Purchase Allowance: Up to ${totalStocks} Items` });
      }

      const updatedCart = await prisma.cart.update({
        where: { id: existingCart.id },
        data: { quantity: updatedQuantity },
      });

      return respHandler(res, "Post product to cart success", updatedCart);
    } else {
      const newCart = await prisma.cart.create({
        data: { userUid: userId, productId, quantity },
      });

      return respHandler(res, "Post product to cart success", newCart);
    }
  } catch (error) {
    next(error);
  }
};

// Update a product in the cart
export const updateProductCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cart_id } = req.params;
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const change = req.query.change as string;
    const cart = await prisma.cart.findFirst({ where: { id: parseInt(cart_id), userUid: userId } });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    let quantity = cart.quantity;

    if (change === "add") {
      quantity += 1;
    } else if (change === "subtract") {
      quantity -= 1;
    }

    if (quantity === 0) {
      await prisma.cart.delete({ where: { id: parseInt(cart_id) } });
      return respHandler(res, "Delete Cart Success", null);
    }

    const updatedCart = await prisma.cart.update({
      where: { id: parseInt(cart_id) },
      data: { quantity },
    });

    respHandler(res, "Update Cart Success", updatedCart);
  } catch (error) {
    next(error);
  }
};

// Delete a product from the cart
export const deleteProductCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cart_id } = req.params;
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await prisma.cart.delete({ where: { id: parseInt(cart_id), userUid: userId } });

    respHandler(res, "Delete Cart Success", null);
  } catch (error) {
    next(error);
  }
};

// Select or deselect a product in the cart
export const selectProductCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { type } = req.body;
    const { cart_id } = req.params;
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const status = type === "checked";

    const updatedCart = await prisma.cart.update({
      where: { id: parseInt(cart_id), userUid: userId },
      data: { status },
    });

    respHandler(res, status ? "Select Cart Success" : "Deselect Cart Success", updatedCart);
  } catch (error) {
    next(error);
  }
};
