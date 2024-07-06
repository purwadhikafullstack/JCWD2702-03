'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteCategoryMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['deleteCategory'],
    mutationFn: async ({ categoryId }: { categoryId: string }) => {
      return await axios.patch(`http://localhost:8000/category/${categoryId}`);
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
