'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useRestoreCategoryMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['restoreCategory'],
    mutationFn: async () => {
      return await axios.patch(`http://localhost:8000/restore/category/`);
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
