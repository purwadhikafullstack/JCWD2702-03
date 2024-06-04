'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const CreateProductMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: any) => void | Promise<void> | ((data: any) => void);
  onError: (error: Error) => void;
}) => {
  const { mutateAsync } = useMutation({
    mutationFn: async (data: {}) => {
      return await axios.post('http://localhost:8000/product/', data);
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
