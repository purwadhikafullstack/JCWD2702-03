import prisma from "@/prisma";
import { ICreateAddress } from "./types";

export const CreateAddressServices = async({province, city, address, zip_code, phone_number}: ICreateAddress) => {
  return await prisma.address.create({
    data:{
      province,
      city,
      address,
      zip_code,
      phone_number
    }
  })
}