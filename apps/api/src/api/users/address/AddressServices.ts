import prisma from '@/prisma';
import { ICreateAddress } from './types';

export const CreateAddressServices = async ({
  userUid,
  receipents,
  province,
  city,
  address,
  zip_code,
  phone_number,
}: ICreateAddress) => {
  return await prisma.address.create({
    data: {
      userUid,
      receipents,
      province,
      city,
      address,
      zip_code,
      phone_number,
    },
  });
};

export const getAddressService = async (userUid: string) => {
  return await prisma.address.findMany({
    where: {
      userUid,
      deletedAt: null,
    },
    orderBy: {
      mainAddress: 'asc',
    },
  });
};

export const deleteAddressServices = async (id: number) => {
  return await prisma.address.update({
    where: {
      id,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};

export const setMainAddressServices = async (id: number, uid: string) => {
  await prisma.$transaction(async (tx) => {
    const findLatestAddressByUid = await tx.address.findFirst({
      where: {
        userUid: uid,
        mainAddress: 'TRUE',
      },
    });

    if (findLatestAddressByUid) {
      await tx.address.updateMany({
        where: {
          id: findLatestAddressByUid.id,
        },
        data: {
          mainAddress: 'FALSE',
        },
      });
    }
    await tx.address.update({
      where: {
        id,
      },
      data: {
        mainAddress: 'TRUE',
      },
    });
  });
};
