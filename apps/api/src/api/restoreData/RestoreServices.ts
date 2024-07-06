import prisma from '@/prisma';

export const findRestoreDataProductQuery = async () => {
  return await prisma.$transaction(async (tx) => {
    const result = await tx.product.findMany({
      where: {
        deletedAt: {
          not: null,
        },
      },
      include: {
        StockProduct: true,
      },
    });
    return result;
  });
};

export const restoreDataQuery = async () => {
  return await prisma.$transaction(async (tx) => {
    await tx.product.updateMany({
      where: {
        deletedAt: {
          not: null,
        },
      },
      data: {
        deletedAt: null,
      },
    });
    await tx.stockProduct.updateMany({
      where: {
        deletedAt: {
          not: null,
        },
      },
      data: {
        deletedAt: null,
      },
    });
  });
};

export const restoreDataProductByIdQuery = async (id: string) => {
  return await prisma.$transaction(async (tx) => {
    await tx.product.update({
      where: {
        id: Number(id),
      },
      data: {
        deletedAt: null,
      },
    });
    await tx.stockProduct.update({
      where: {
        id: Number(id),
      },
      data: {
        deletedAt: null,
      },
    });
  });
};

export const findRestoreDataStoreQuery = async () => {
  return await prisma.$transaction(async (tx) => {
    const result = await tx.store.findMany({
      where: {
        deletedAt: {
          not: null,
        },
      },
    });
    return result;
  });
};

export const restoreDataStoreQuery = async () => {
  return await prisma.$transaction(async (tx) => {
    await tx.store.updateMany({
      where: {
        deletedAt: {
          not: null,
        },
      },
      data: {
        deletedAt: null,
      },
    });
  });
};

export const restoreDataStoreByIdQuery = async (id: string) => {
  return await prisma.$transaction(async (tx) => {
    await tx.store.update({
      where: {
        id: Number(id),
      },
      data: {
        deletedAt: null,
      },
    });
  });
};

export const findRestoreDataCategoryQuery = async () => {
  return await prisma.$transaction(async (tx) => {
    const result = await tx.productCategory.findMany({
      where: {
        deletedAt: {
          not: null,
        },
      },
    });
    return result;
  });
};

export const restoreDataCategoryQuery = async () => {
  return await prisma.$transaction(async (tx) => {
    await tx.productCategory.updateMany({
      where: {
        deletedAt: {
          not: null,
        },
      },
      data: {
        deletedAt: null,
      },
    });
  });
};

export const restoreDataCategoryByIdQuery = async (id: string) => {
  return await prisma.$transaction(async (tx) => {
    await tx.productCategory.update({
      where: {
        id: Number(id),
      },
      data: {
        deletedAt: null,
      },
    });
  });
};
