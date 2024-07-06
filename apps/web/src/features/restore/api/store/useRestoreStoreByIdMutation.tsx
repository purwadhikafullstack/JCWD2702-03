'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useRestoreStoreByIdMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['restoreStoreById'],
    mutationFn: async ({ storeId }: { storeId: string }) => {
      return await axios.patch(
        `http://localhost:8000/restore/store/${storeId}`,
      );
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
