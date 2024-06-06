'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeletedProductMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationKey: ['deletedProduct'],
    mutationFn: async ({ id }: { id: string }) => {
      return await axios.delete(`http://localhost:8000/product/${id}`);
    },
    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
