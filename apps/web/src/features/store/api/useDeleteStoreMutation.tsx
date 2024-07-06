'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteStoreMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync: deleteStore } = useMutation({
    mutationKey: ['deleteStore'],
    mutationFn: async ({ storeId }: { storeId: string }) => {
      return await axios.patch(`http://localhost:8000/store/${storeId}`);
    },
    onSuccess,
    onError,
  });
  return {
    deleteStore,
  };
};
