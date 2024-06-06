import prisma from '@/prisma';

export const CreateCategorySevices = async (name: string) => {
  return await prisma.$transaction(async (tx) => {
    const exitingCategory = await tx.productCategory.findFirst({
      where: {
        name: name,
      },
    });
    if (exitingCategory) {
      throw new Error('Category Product Already Exist!');
    }
    return await tx.productCategory.create({
      data: {
        name,
      },
    });
  });
};

export const UpdateCategoryServices = async (id: string, name: string) => {
  return await prisma.$transaction(async (tx) => {
    const findCategory = await tx.productCategory.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!findCategory) throw new Error('Category Product Not Found!');
    const exitingCategory = await tx.productCategory.findFirst({
      where: {
        name: name,
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
        name,
      },
    });
  });
};

export const FindAllCategoryServices = async () => {
  return await prisma.productCategory.findMany();
};

export const DeletedCategoryServices = async (id: string) => {
  return await prisma.$transaction(async (tx) => {
    const findCategory = await tx.productCategory.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!findCategory)
      throw new Error('Category Not Found or Already Deleted!');

    await tx.productCategory.delete({
      where: {
        id: Number(id),
      },
    });
  });
};
