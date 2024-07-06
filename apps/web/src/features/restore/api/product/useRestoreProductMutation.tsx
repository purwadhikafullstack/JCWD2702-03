'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useRestoreProductMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['restoreProduct'],
    mutationFn: async () => {
      return axios.patch('http://localhost:8000/restore/product/');
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
