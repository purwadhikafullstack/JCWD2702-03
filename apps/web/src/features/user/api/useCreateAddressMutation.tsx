'use client'
import { axiosInstanceInterceptor } from '@/utils/axiosInstanceInterceptor'
import { useMutation } from '@tanstack/react-query'

export interface ICreateAddress {
  province: string
  city: string
  address: string
  zip_code: string
  phone_number: string
}
export const useCreateAddressMutation = ({onSuccess, onError}: any) => {
  const {mutate} = useMutation({
    mutationFn: async ({province,
      city,
      address,
      zip_code,
      phone_number}: ICreateAddress) => {
      return await axiosInstanceInterceptor.post('http://localhost:8000/users/address', {
        province,
        city,
        address,
        zip_code,
        phone_number
      } )
    },

    onSuccess,
    onError
  })
  return{
    mutate
  }
}