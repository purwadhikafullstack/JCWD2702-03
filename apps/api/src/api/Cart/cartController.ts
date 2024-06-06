// // cartController.ts
// import { Request, Response } from "express";
// //import * as cartService from "./cartServices";
// import { CartData } from "./types";

// export const createCart = async (req: Request, res: Response) => {
//   try {
//     const cartData: CartData = req.body;
//     const cart = await cartService.createCart(cartData);
//     res.status(201).json(cart);
//   } catch (error) {
//     res.status(400).json({ error: (error as Error).message });
//   }
// };

// export const getCartById = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const cart = await cartService.getCartById(parseInt(id));
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(404).json({ error: (error as Error).message });
//   }
// };

// export const updateCart = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const cartData: CartData = req.body;
//     const cart = await cartService.updateCart(parseInt(id), cartData);
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(400).json({ error: (error as Error).message });
//   }
// };

// export const deleteCart = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const cart = await cartService.deleteCart(parseInt(id));
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(404).json({ error: (error as Error).message });
//   }
// };
