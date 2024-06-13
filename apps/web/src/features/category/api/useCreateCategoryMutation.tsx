'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const CreateCategoryMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async (fd: any) => {
      return await axios.post('http://localhost:8000/category/', fd);
    },
    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
