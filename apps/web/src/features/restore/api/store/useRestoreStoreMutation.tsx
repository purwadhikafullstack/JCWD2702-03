'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useRestoreStoreMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['restoreStore'],
    mutationFn: async () => {
      return await axios.patch(`http://localhost:8000/restore/store/`);
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
