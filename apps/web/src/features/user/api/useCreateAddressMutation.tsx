'use client';
import { axiosInstanceInterceptor } from '@/utils/axiosInstanceInterceptor';
import { useMutation } from '@tanstack/react-query';

export interface ICreateAddress {
  receipents: string;
  province: string;
  city: string;
  address: string;
  zip_code: string;
  phone_number: string;
}
export const useCreateAddressMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({
      receipents,
      province,
      city,
      address,
      zip_code,
      phone_number,
    }: ICreateAddress) => {
      return await axiosInstanceInterceptor.post(
        'http://localhost:8000/users/address',
        {
          receipents,
          province,
          city,
          address,
          zip_code,
          phone_number,
        },
      );
    },

    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
