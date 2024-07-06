'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useRestoreProductByIdMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['restoreProductById'],
    mutationFn: async ({ productId }: { productId: string }) => {
      return axios.patch(`http://localhost:8000/restore/product/${productId}`);
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
