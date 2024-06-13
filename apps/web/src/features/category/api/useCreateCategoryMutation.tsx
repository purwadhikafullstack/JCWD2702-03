'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const CreateCategoryMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async (name: any) => {
      return await axios.post('http://localhost:8000/category/', name);
    },
    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
