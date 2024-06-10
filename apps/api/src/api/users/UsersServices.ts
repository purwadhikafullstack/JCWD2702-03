import prisma from "@/prisma";
import { ICreateUser } from "./types";

export const CreateUserServices = async ({email, password}: ICreateUser) => {
  return await prisma.user.create({
    data:{
      email,
      password
    }
  })
}


