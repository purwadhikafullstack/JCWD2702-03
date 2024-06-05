import prisma from '@/prisma';

export const createProductServices = async (data: any, product_images: any) => {
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
    product_images.forEach((item: any) => {
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

export const updateProductServices = async (
  data: any,
  product_images: any,
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
    product_images.forEach((item: any) => {
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

export const findAllProductServices = async () => {
  return await prisma.product.findMany({
    include: {
      productCategory: true,
      ProductImage: true,
    },
  });
};

export const findProductByIdServices = async (id: string) => {
  return await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      productCategory: true,
      ProductImage: true,
    },
  });
};

export const deletedProductServices = async (id: string) => {
  return await prisma.$transaction(async (tx) => {
    const findProduct = await tx.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!findProduct) throw new Error('Product Not Found or Already Deleted!');

    await tx.product.delete({
      where: {
        id: Number(id),
      },
    });
  });
};
