'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeletedProductMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['deletedProduct'],
    mutationFn: async ({ productId }: { productId: string }) => {
      return await axios.delete(`http://localhost:8000/product/${productId}`);
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
