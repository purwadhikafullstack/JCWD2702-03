// cartService.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface DataToken {
  id: string;
}

interface ProductData {
  product_id: number;
  quantity: number;
  total_stocks: number;
}

// Find all products in the cart
export const findAllProductsInCart = async (dataToken: DataToken) => {
  try {
    const { id } = dataToken;

    const dataProductsInCart = await prisma.cart.findMany({
      where: { userUid: id },
      include: {
        product: {
          include: {
            ProductImage: {
              select: {
                productImage: true,
                id: true,
              },
              take: 1,
            },
            StokProduct: {
              select: {
                stok: true,
                id: true,
                storeId: true,
              },
            },
            productCategory: {
              select: {
                name: true,
                id: true,
              },
            },
            Discount: {
              select: {
                discount_voucher: true,
                id: true,
              },
            },
          },
        },
      },
    });

    const count = dataProductsInCart.length;

    const selectedItems = dataProductsInCart
      .filter((cart) => cart.status)
      .reduce((sum, cart) => sum + cart.quantity, 0);

    const totalPrice = dataProductsInCart
      .filter((cart) => cart.status)
      .reduce((sum, cart) => sum + cart.product.price * cart.quantity, 0);

    return {
      count,
      cart: dataProductsInCart,
      selectedItems,
      totalPrice,
    };
  } catch (error) {
    throw new Error(`Failed to find products in cart: ${(error as Error).message}`);
  }
};

// Add a product to the cart
export const addToCart = async (dataToken: DataToken, productData: ProductData) => {
  try {
    const { product_id, quantity, total_stocks } = productData;
    const { id } = dataToken;

    const existingCart = await prisma.cart.findUnique({
      where: {
        userUid_productId: {
          userUid: id,
          productId: product_id,
        },
      },
    });

    if (existingCart) {
      const updatedQuantity = existingCart.quantity + quantity;

      if (updatedQuantity > total_stocks) {
        throw new Error(`Purchase Allowance: Up to ${total_stocks} Items`);
      }

      const updatedCart = await prisma.cart.update({
        where: { id: existingCart.id },
        data: { quantity: updatedQuantity },
      });

      return updatedCart;
    } else {
      const newCart = await prisma.cart.create({
        data: {
          userUid: id,
          productId: product_id,
          quantity: quantity,
        },
      });

      return newCart;
    }
  } catch (error) {
    throw new Error(`Failed to add to cart: ${(error as Error).message}`);
  }
};

// Update a product in the cart
export const updateProductCart = async (dataToken: DataToken, cart_id: number, change: string) => {
  try {
    const { id } = dataToken;

    const cart = await prisma.cart.findUnique({
      where: { id: cart_id },
    });

    if (!cart || cart.userUid !== id) {
      throw new Error("Cart not found");
    }

    let quantity = cart.quantity;

    if (change === "add") {
      quantity += 1;
    } else if (change === "subtract") {
      quantity -= 1;
    }

    if (quantity === 0) {
      await prisma.cart.delete({
        where: { id: cart_id },
      });
      return null;
    }

    const updatedCart = await prisma.cart.update({
      where: { id: cart_id },
      data: { quantity },
    });

    return updatedCart;
  } catch (error) {
    throw new Error(`Failed to update cart: ${(error as Error).message}`);
  }
};

// Delete a product from the cart
export const deleteProductCart = async (dataToken: DataToken, cart_id: number) => {
  try {
    const { id } = dataToken;

    const deletedCart = await prisma.cart.deleteMany({
      where: { id: cart_id, userUid: id },
    });

    return deletedCart;
  } catch (error) {
    throw new Error(`Failed to delete cart: ${(error as Error).message}`);
  }
};

// Select or deselect a product in the cart
export const selectProductCart = async (dataToken: DataToken, cart_id: number, type: string) => {
  try {
    const { id } = dataToken;

    if (type === "checked") {
      await prisma.cart.updateMany({
        where: { id: cart_id, userUid: id },
        data: { status: true },
      });
      return "Select Cart Success";
    }

    if (type === "unchecked") {
      await prisma.cart.updateMany({
        where: { id: cart_id, userUid: id },
        data: { status: false },
      });
      return "Deselect Cart Success";
    }

    return "Empty command!";
  } catch (error) {
    throw new Error(`Failed to select/deselect cart: ${(error as Error).message}`);
  }
};
