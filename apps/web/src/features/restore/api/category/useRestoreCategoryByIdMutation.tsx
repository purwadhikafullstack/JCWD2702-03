'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useRestoreCategoryByIdMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['restoreCategoryById'],
    mutationFn: async ({ categoryId }: { categoryId: string }) => {
      return await axios.patch(
        `http://localhost:8000/restore/category/${categoryId}`,
      );
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
