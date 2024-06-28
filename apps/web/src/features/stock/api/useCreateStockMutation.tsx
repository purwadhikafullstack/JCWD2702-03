'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateStockMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['createStock'],
    mutationFn: async ({
      stock,
      productId,
      storeId,
    }: {
      stock: number;
      productId: number;
      storeId: number;
    }) => {
      return await axios.post('http://localhost:8000/stock', {
        stock,
        productId,
        storeId,
      });
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
