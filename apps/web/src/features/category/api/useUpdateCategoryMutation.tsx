'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateCategoryMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationKey: ['updateCategory'],
    mutationFn: async ({
      name,
      categoryId,
    }: {
      name: string;
      categoryId: string;
    }) => {
      return await axios.put(`http://localhost:8000/category/${categoryId}`, {
        name,
      });
    },
    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};