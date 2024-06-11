import prisma from '@/prisma';
import { ICreateUser } from './types';

export const CreateUserServices = async ({ email, firstName, lastName }: ICreateUser) => {
  return await prisma.user.create({
    data: {
      email: email!,
      firstName: firstName,
      lastName: lastName,
    },
  });
};

export const findUsersByEmailServices = async({email}: {email: string}) => {
  return await prisma.user.findFirst({
    where: {
      email
    }
  })
}

export const CreateUserServiceWithGoogle = async({email, fullname, uid,}: {email: string, fullname: string, uid: string}) => {
await prisma.user.create({
    data:{
      email,
      verify: 'VERFIY',
      uid: uid,
      googleAuth: 'TRUE'
    }
  })

  return await prisma.userProfile.create({
    data: {
     fullname: fullname,
     userUid: uid
    }
  })
}
