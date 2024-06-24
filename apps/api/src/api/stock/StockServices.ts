import prisma from '@/prisma';
import { ICreateStock } from './type';

export const createStockQuery = async ({
  stock,
  productId,
  storeId,
}: ICreateStock) => {
  return await prisma.$transaction(async (tx) => {
    const findProduct = await tx.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!findProduct)
      throw new Error('Product Not Found or Add Product First!');
    const findStore = await tx.store.findUnique({
      where: {
        id: storeId,
      },
    });
    if (!findStore) throw new Error('Store Not Found or Add Store First!');

    if (stock === 0) throw new Error('Stock cannot be 0!');

    return await tx.stockProduct.create({
      data: {
        stock: stock,
        productId: productId,
        storeId: storeId,
      },
    });
  });
};

export const updateStockQuery = async (
  id: string,
  { stock, productId, storeId }: ICreateStock,
) => {
  return await prisma.$transaction(async (tx) => {
    const findStock = await tx.stockProduct.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!findStock) throw new Error('Stock Not Found or Add Stock First!');
    if (findStock.productId === productId)
      throw new Error('Stock Product has been changed!');

    return await tx.stockProduct.update({
      where: {
        id: Number(id),
      },
      data: {
        stock: stock,
        productId: productId,
        storeId: storeId,
      },
    });
  });
};

export const findStockByIdQuery = async (id: string) => {
  return await prisma.stockProduct.findUnique({
    where: {
      id: Number(id),
      deletedAt: null,
    },
    include: {
      product: true,
      store: true,
    },
  });
};

export const findAllStockQuery = async () => {
  return await prisma.stockProduct.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      product: true,
      store: true,
    },
  });
};

export const deleteStockQuery = async (id: string) => {
  return await prisma.stockProduct.update({
    where: {
      id: Number(id),
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
