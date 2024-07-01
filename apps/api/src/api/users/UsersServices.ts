import prisma from '@/prisma';
import { ICreateUser, ICreateUserWithGoogle } from './types';

export const CreateUserServices = async ({
  email,
  firstName,
  lastName,
}: ICreateUser) => {
  const createUser = await prisma.user.create({
    data: {
      email: email!,
      firstName: firstName,
      lastName: lastName,
    },
  });

  await prisma.userProfile.create({
    data: {
      fullname: `${firstName} ${lastName}`,
      userUid: createUser.uid,
    },
  });
  return createUser
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

export const findUsersByUidServices = async ({ uid }: { uid: string }) => {
  return await prisma.user.findUnique({
    where: {
      uid: uid,
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
      googleAuth: 'TRUE',
      firstName: firstName,
      lastName: lastName,
    },
  });

  const createProfile = await prisma.userProfile.create({
    data: {
      fullname: fullname,
      userUid: createUserWithGoogle.uid,
    },
  });
  return {
    createUserWithGoogle,
    createProfile,
  };
};

export const passwordService = async ({
  uid,
  password,
}: {
  uid: string;
  password: string;
}) => {
  return await prisma.user.update({
    where: {
      uid,
    },
    data: {
      password,
      verify: 'VERFIY',
    },
  });
};

export const udpateResetPasswordService = async ({ uid }: { uid: string }) => {
  const findResetPassword = await prisma.resetPassword.findFirst({
    where: {
      userUid: uid,
    },
    orderBy: {
      id: 'desc',
    },
  });
  if(!findResetPassword) return;
  return await prisma.resetPassword.update({
    where: {
      id: findResetPassword.id,
    },
    data: {
      status: 'DONE',
    },
  });
};

export const createResetPasswordService = async ({
  uid,
  date,
}: {
  uid: string;
  date: string;
}) => {
  const findResetPassword = await prisma.resetPassword.findFirst({
    where: {
      userUid: uid,
    },
    orderBy: {
      id: 'desc',
    },
  });

  if (findResetPassword?.status === 'PENDING') {
    await prisma.resetPassword.update({
      where: {
        id: findResetPassword.id,
      },
      data: {
        status: 'EXPIRED',
      },
    });
  }

  if (findResetPassword?.status !== 'DONE') {
    await prisma.resetPassword.create({
      data: {
        expiredAt: date,
        userUid: uid,
      },
    });
  }
};

export const findResetPasswordServices = async ({ uid }: { uid: string }) => {
  return await prisma.resetPassword.findFirst({
    where: {
      userUid: uid,
    },
    orderBy: {
      id: 'desc',
    },
  });
};

export const getUserUidService = async ({ uid }: { uid: string }) => {
  return await prisma.user.findUnique({
    where: {
      uid,
    },
    include: {
      userProfile: {
        include: {
          address: true,
          UserImagesProfile: true,
        },
      },
    },
  });
};
