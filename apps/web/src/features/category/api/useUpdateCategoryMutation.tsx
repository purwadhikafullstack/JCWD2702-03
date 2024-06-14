'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateCategoryMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationKey: ['updateCategory'],
    mutationFn: async ({ fd, categoryId }: { fd: any; categoryId: string }) => {
      return await axios.put(
        `http://localhost:8000/category/${categoryId}`,
        fd,
      );
    },
    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
