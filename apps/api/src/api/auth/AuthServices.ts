import prisma from '@/prisma'
import { IFindUserByEmailParams } from './types'
export const findUsersByEmail = async({email}: IFindUserByEmailParams) => {
  const findUsers =  await prisma.user.findFirst({
    where: {
      email
    }
  })
  if(!findUsers) throw new Error('User not found')

  return findUsers
}

export const findUsersByUid = async ({uid}: {uid:string}) =>{
  return await prisma.user.findUnique({
    where: {
      uid
    }
  })
}