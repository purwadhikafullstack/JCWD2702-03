import prisma from '@/prisma';
import { ICreateStore } from './type';

export const createStoreQuery = async ({
  name,
  province,
  city,
  address,
  zip_code,
  latitude,
  longitude,
}: ICreateStore) => {
  return await prisma.$transaction(async (tx) => {
    // const findNameStore = await tx.store.findFirst({
    //   where: {
    //     name: name,
    //   },
    // });
    // if (findNameStore) {
    //   throw new Error(`Store with the name ${name} already exists!`);
    // }
    return await tx.store.create({
      data: {
        name: name,
        province: province,
        city: city,
        address: address,
        zip_code: zip_code,
        latitude: latitude,
        longitude: longitude,
      },
    });
  });
};

export const updateStoreQuery = async (
  id: string,
  {
    name,
    province,
    city,
    address,
    zip_code,
    latitude,
    longitude,
  }: ICreateStore,
) => {
  return await prisma.$transaction(async (tx) => {
    const findStore = await tx.store.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!findStore) throw new Error('Store Not Found');
    return await tx.store.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        province: province,
        city: city,
        address: address,
        zip_code: zip_code,
        latitude: latitude,
        longitude: longitude,
      },
    });
  });
};

export const findStoreByIdQuery = async (id: string) => {
  return await prisma.store.findUnique({
    where: {
      id: Number(id),
      deletedAt: null,
    },
    include: {
      StockProduct: true,
    },
  });
};

export const findAllStoreQuery = async () => {
  return await prisma.store.findMany({
    include: {
      StockProduct: true,
    },
    where: {
      deletedAt: null,
    },
  });
};

export const deleteStoreQuery = async (id: string) => {
  return await prisma.store.update({
    where: {
      id: Number(id),
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
