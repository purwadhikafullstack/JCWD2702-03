import prisma from '@/prisma';
import { ICreateUser, ICreateUserWithGoogle } from './types';

export const CreateUserServices = async ({
  email,
  firstName,
  lastName,
}: ICreateUser) => {
  return await prisma.user.create({
    data: {
      email: email!,
      firstName: firstName,
      lastName: lastName,
    },
  });
};

export const findUsersByEmailServices = async ({
  email,
}: {
  email: string;
}) => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
};

export const CreateUserServiceWithGoogle = async ({
  email,
  fullname,
  uid,
  firstName,
  lastName,
}: ICreateUserWithGoogle) => {
  const createUserWithGoogle = await prisma.user.create({
    data: {
      email: email,
      verify: 'VERFIY',
      uid: uid,
      googleAuth: 'TRUE',
      firstName: firstName,
      lastName: lastName,
    },
  });

  const createProfile = await prisma.userProfile.create({
    data: {
      fullname: fullname,
      userUid: uid,
    },
  });
  return {
    createUserWithGoogle,
    createProfile,
  };
};
