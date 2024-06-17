// server/services/cartService.ts
import { PrismaClient, Cart } from '@prisma/client';

const prisma = new PrismaClient();

class CartService {
  async getCartItems(userId: string): Promise<Cart[]> {
    return await prisma.cart.findMany({
      where: {
        userUid: userId,
      },
      include: {
        product: true,
      },
    });
  }

  async addToCart(
    userId: string,
    productId: number,
    quantity: number,
  ): Promise<Cart> {
    return await prisma.cart.create({
      data: {
        user: {
          connect: { uid: userId },
        },
        product: {
          connect: { id: productId },
        },
        quantity,
      },
      include: {
        product: true,
      },
    });
  }

  async updateCartQuantity(cartId: number, newQuantity: number): Promise<Cart> {
    return await prisma.cart.update({
      where: {
        id: cartId,
      },
      data: {
        quantity: newQuantity,
      },
      include: {
        product: true,
      },
    });
  }

  async removeFromCart(cartId: number): Promise<void> {
    await prisma.cart.delete({
      where: {
        id: cartId,
      },
    });
  }

  async getUserCartProducts(userId: string) {
    return await prisma.cart.findMany({
      where: { userUid: userId, deletedAt: null },
      include: {
        product: {
          include: {
            productCategory: true,
            ProductImage: true,
          },
        },
      },
    });
  }
}

export default new CartService();