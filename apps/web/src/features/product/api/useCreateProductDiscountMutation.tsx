'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateProductDiscountMutation = ({
  onSuccess,
  onError,
}: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['createProductDiscount'],
    mutationFn: async ({
      productId,
      pieces,
      expired,
    }: {
      productId: number;
      pieces: number;
      expired: string;
    }) => {
      return await axios.post('http://localhost:8000/product/discount', {
        productId,
        pieces,
        expired,
      });
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
