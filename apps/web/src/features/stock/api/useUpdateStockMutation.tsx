'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateStockMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['updateStock'],
    mutationFn: async ({
      stock,
      productId,
      storeId,
      stockId,
    }: {
      stock: number;
      productId: number;
      storeId: number;
      stockId: string;
    }) => {
      return await axios.put(`http://localhost:8000/stock/${stockId}`, {
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
