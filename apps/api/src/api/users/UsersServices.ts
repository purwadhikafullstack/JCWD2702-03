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