import prisma from '@/prisma';

export const createProductQuery = async (data: any, image_product: any) => {
  return await prisma.$transaction(async (tx) => {
    const existingProduct = await tx.product.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existingProduct) {
      throw new Error(`Product with the name ${data.name} already exists!`);
    }

    const createProduct = await tx.product.create({
      data: {
        categoryId: data.categoryId,
        name: data.name,
        price: data.price,
        description: data.description,
      },
    });
    const imageToCreate: any = [];
    image_product.forEach((item: any) => {
      imageToCreate.push({
        productImage: item.path,
        productId: createProduct.id,
      });
    });
    await tx.productImage.createMany({
      data: [...imageToCreate],
    });
  });
};

export const updateProductQuery = async (
  data: any,
  image_product: any,
  id: string,
) => {
  return await prisma.$transaction(async (tx) => {
    const findProduct = await tx.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!findProduct) throw new Error('Product Not Found');

    const existingProduct = await tx.product.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existingProduct) {
      throw new Error(`Product with the name ${data.name} already exists!`);
    }

    await tx.product.update({
      where: {
        id: Number(id),
      },
      data: {
        categoryId: data.categoryId,
        name: data.name,
        price: data.price,
        description: data.description,
      },
    });

    const findProductImage = await tx.productImage.findMany({
      where: {
        productId: findProduct.id,
      },
    });

    await tx.productImage.deleteMany({
      where: {
        productId: findProduct.id,
      },
    });

    const imageToCreate: any = [];
    image_product.forEach((item: any) => {
      imageToCreate.push({
        productImage: item.path,
        productId: findProduct.id,
      });
    });
    await tx.productImage.createMany({
      data: [...imageToCreate],
    });
    return findProductImage;
  });
};

export const findProductQuery = async () => {
  return await prisma.product.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      DiscountProduct: true,
      productCategory: true,
      ProductImage: true,
      StockProduct: {
        include: {
          store: true,
        },
      },
    },
  });
};

export const filterProductQuery = async (
  productName?: string,
  category?: string,
  page?: any,
) => {
  if (productName) {
    return await prisma.product.findMany({
      where: {
        name: {
          contains: productName,
        },
      },
      include: {
        DiscountProduct: true,
        productCategory: true,
        ProductImage: true,
        StockProduct: {
          include: {
            store: true,
          },
        },
      },
    });
  }
  if (category) {
    return await prisma.product.findMany({
      where: {
        productCategory: {
          id: Number(category),
        },
      },
      include: {
        DiscountProduct: true,
        productCategory: true,
        ProductImage: true,
        StockProduct: {
          include: {
            store: true,
          },
        },
      },
    });
  }
  return await prisma.product.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      DiscountProduct: true,
      productCategory: true,
      ProductImage: true,
      StockProduct: {
        include: {
          store: true,
        },
      },
    },
    skip: (Number(page) - 1) * Number(5) || 0,
    take: 5,
  });
};

export const findProductByIdQuery = async (id: string) => {
  return await prisma.product.findUnique({
    where: {
      id: Number(id),
      deletedAt: null,
    },
    include: {
      DiscountProduct: true,
      productCategory: true,
      ProductImage: true,
      StockProduct: {
        include: {
          store: true,
        },
      },
    },
  });
};

export const updateProductDiscountQuery = async ({
  productId,
  pieces,
  expired,
}: {
  productId: number;
  pieces: number;
  expired: string;
}) => {
  return await prisma.discountProduct.create({
    data: {
      productId: productId,
      pieces: pieces,
      expired: new Date(expired),
    },
  });
};

export const deletedProductQuery = async (id: string) => {
  return await prisma.$transaction(async (tx) => {
    await tx.product.update({
      where: {
        id: Number(id),
      },
      data: {
        deletedAt: new Date(),
      },
    });
  });
};
