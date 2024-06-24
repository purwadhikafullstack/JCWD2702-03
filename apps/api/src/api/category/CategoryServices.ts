import prisma from '@/prisma';

export const CreateCategoryQuery = async (data: any, image_category: any) => {
  return await prisma.$transaction(async (tx) => {
    const exitingCategory = await tx.productCategory.findFirst({
      where: {
        name: data.name,
      },
    });
    if (exitingCategory) {
      throw new Error('Category Product Already Exist!');
    }
    const createCategory = await tx.productCategory.create({
      data: {
        name: data.name,
      },
    });
    const imageToCreate: any = [];
    image_category.forEach((item: any) => {
      imageToCreate.push({
        categoryUrl: item.path,
        productCategoryId: createCategory.id,
      });
    });
    await tx.productCategoryImage.createMany({
      data: [...imageToCreate],
    });
  });
};

export const UpdateCategoryQuery = async (
  data: any,
  image_category: any,
  id: string,
) => {
  return await prisma.$transaction(async (tx) => {
    const findCategory = await tx.productCategory.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!findCategory) throw new Error('Category Product Not Found!');
    const exitingCategory = await tx.productCategory.findFirst({
      where: {
        name: data.name,
      },
    });
    if (exitingCategory) {
      throw new Error('Category Product Already Exist!');
    }

    await tx.productCategory.update({
      where: {
        id: Number(id),
      },
      data: {
        name: data.name,
      },
    });
    const findCategoryImage = await tx.productCategoryImage.findMany({
      where: {
        productCategoryId: findCategory.id,
      },
    });
    await tx.productCategoryImage.deleteMany({
      where: {
        productCategoryId: findCategory.id,
      },
    });
    const imageToCreate: any = [];
    image_category.forEach((item: any) => {
      imageToCreate.push({
        categoryUrl: item.path,
        productCategoryId: findCategory.id,
      });
    });
    await tx.productCategoryImage.createMany({
      data: [...imageToCreate],
    });
    return findCategoryImage;
  });
};

export const FindAllCategoryQuery = async () => {
  return await prisma.productCategory.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      ProductCategoryImage: true,
    },
  });
};

export const FindCategoryByIdQuery = async (id: string) => {
  return await prisma.productCategory.findUnique({
    where: {
      id: Number(id),
      deletedAt: null,
    },
  });
};

export const DeletedCategoryQuery = async (id: string) => {
  return await prisma.$transaction(async (tx) => {
    const findCategory = await tx.productCategory.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!findCategory)
      throw new Error('Category Not Found or Already Deleted!');

    await tx.productCategory.update({
      where: {
        id: Number(id),
      },
      data: {
        deletedAt: new Date(),
      },
    });
  });
};
