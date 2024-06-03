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
    const imageToCreate: any = [];
    product_images.forEach((item: any) => {
      imageToCreate.push({
        url: item.path,
      });
    });
    await tx.product.create({
      data: {
        category_id: data.category_id,
        product_image: data.product_image,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        description: data.description,
      },
    });
  });
};

export const updateProductServices = async (
  data: any,
  product_images: any,
  id: string,
) => {
  return await prisma.$transaction(async (tx) => {
    const updateProduct = await tx.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!updateProduct) throw new Error('Product Not Found');

    const existingProduct = await tx.product.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existingProduct) {
      throw new Error(`Product with the name ${data.name} already exists!`);
    }

    const imageToCreate: any = [];
    product_images.forEach((item: any) => {
      imageToCreate.push({
        url: item.path,
      });
    });

    await tx.product.update({
      where: {
        id: Number(id),
      },
      data: {
        category_id: data.category_id,
        product_image: data.product_image,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        description: data.description,
      },
    });
  });
};

export const findAllProductServices = async () => {
  return await prisma.product.findMany();
};

export const findProductByIdServices = async (id: string) => {
  return await prisma.product.findUnique({
    where: {
      id: Number(id),
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
