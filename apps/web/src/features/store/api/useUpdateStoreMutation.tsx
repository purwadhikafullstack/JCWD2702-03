'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateStoreMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationKey: ['updateStore'],
    mutationFn: async ({
      name,
      province,
      city,
      address,
      zip_code,
      latitude,
      longitude,
      storeId,
    }: {
      name: string;
      province: string;
      city: string;
      address: string;
      zip_code: string;
      latitude: number;
      longitude: number;
      storeId: string;
    }) => {
      return await axios.put(`http://localhost:8000/store/${storeId}`, {
        name,
        province,
        city,
        address,
        zip_code,
        latitude,
        longitude,
      });
    },
    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
