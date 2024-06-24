'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateProductMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationKey: ['createProduct'],
    mutationFn: async (fd: any) => {
      return await axios.post('http://localhost:8000/product/', fd);
    },
    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
