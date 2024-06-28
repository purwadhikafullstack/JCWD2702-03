'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateProductMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['updateProduct'],
    mutationFn: async ({ fd, productID }: { fd: any; productID: string }) => {
      return await axios.put(`http://localhost:8000/product/${productID}`, fd);
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
