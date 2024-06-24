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

export const findAllAndFilterProductQuery = async (
  productName?: string,
  // page?: any,
  category?: string,
) => {
  if (productName) {
    return await prisma.product.findMany({
      where: {
        name: {
          contains: productName,
        },
      },
      include: {
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
      productCategory: true,
      ProductImage: true,
      StockProduct: {
        include: {
          store: true,
        },
      },
    },
    // skip: (Number(page) - 1) * Number(6) || 0,
    // take: 6,
    // orderBy: {
    //   name: 'asc',
    // },
  });
};

// export const filterProductQuery = async (productName?: string, category?: string, ) => {

// }

export const findProductByIdQuery = async (id: string) => {
  return await prisma.product.findUnique({
    where: {
      id: Number(id),
      deletedAt: null,
    },
    include: {
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
