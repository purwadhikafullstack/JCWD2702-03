// // cartService.ts
// import { PrismaClient } from "@prisma/client";
// import { Cart, CartData } from "./types";

// const prisma = new PrismaClient();

// export const createCart = async (cartData: CartData): Promise<Cart> => {
//   try {
//     const cart = await prisma.cart.create({
//       data: cartData,
//     });
//     return cart;
//   } catch (error) {
//     throw new Error(`Failed to create cart: ${(error as Error).message}`);
//   }
// };

// export const getCartById = async (id: number): Promise<Cart | null> => {
//   try {
//     const cart = await prisma.cart.findUnique({
//       where: { id },
//       include: { user: true, product: true },
//     });
//     return cart;
//   } catch (error) {
//     throw new Error(`Failed to get cart: ${(error as Error).message}`);
//   }
// };

// export const updateCart = async (id: number, cartData: CartData): Promise<Cart> => {
//   try {
//     const cart = await prisma.cart.update({
//       where: { id },
//       data: cartData,
//     });
//     return cart;
//   } catch (error) {
//     throw new Error(`Failed to update cart: ${(error as Error).message}`);
//   }
// };

// export const deleteCart = async (id: number): Promise<Cart> => {
//   try {
//     const cart = await prisma.cart.delete({
//       where: { id },
//     });
//     return cart;
//   } catch (error) {
//     throw new Error(`Failed to delete cart: ${(error as Error).message}`);
//   }
// };
