import prisma from '@/prisma';

export const createDiscountQuery = async ({
  code,
  pieces,
  expired,
  min_pay,
}: {
  code: string;
  pieces: number;
  expired: Date;
  min_pay: number;
}) => {
  return await prisma.$transaction(async (tx) => {
    const findDiscount = await tx.discount.findFirst({
      where: {
        code: code,
      },
    });
    if (findDiscount) {
      throw new Error('Discount Code Already Exist!');
    }
    // if (expired < new Date()) {
    //   throw new Error('Discount Expired!');
    // }
    return await tx.discount.create({
      data: {
        code: code,
        pieces: pieces,
        expired: new Date(expired),
        min_pay: min_pay,
      },
    });
  });
};

export const updateDiscountQuery = async (
  { id }: { id: string },
  {
    code,
    pieces,
    expired,
    min_pay,
  }: { code: string; pieces: number; expired: Date; min_pay: number },
) => {
  return await prisma.$transaction(async (tx) => {
    const findDiscount = await tx.discount.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!findDiscount) throw new Error('Discount Not Found!');
    // if (expired < new Date()) throw new Error('Discount Expired!');
    return await tx.discount.update({
      where: {
        id: Number(id),
      },
      data: {
        code: code,
        pieces: pieces,
        expired: new Date(expired),
        min_pay: min_pay,
      },
    });
  });
};

export const findDiscountQuery = async () => {
  return await prisma.discount.findMany();
};

export const findByIdDiscountQuery = async ({ id }: { id: string }) => {
  return await prisma.discount.findUnique({
    where: {
      id: Number(id),
    },
  });
};
