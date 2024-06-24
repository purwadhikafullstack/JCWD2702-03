import prisma from "@/prisma"
import { ICreateRoleId } from "./types"

export const CreateRoleServices = async ({role}: ICreateRoleId) =>{
  return await prisma.userRole.create({
    data:{
      role
    }
  })
}