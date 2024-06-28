'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateCategoryMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['updateCategory'],
    mutationFn: async ({ fd, categoryId }: { fd: any; categoryId: string }) => {
      const res = await axios.put(
        `http://localhost:8000/category/${categoryId}`,
        fd,
      );
      return res;
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
