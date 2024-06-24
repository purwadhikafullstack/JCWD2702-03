'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ICreateStoreMutation } from './type';

export const useCreateStoreMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationKey: ['createStore'],
    mutationFn: async ({
      name,
      province,
      city,
      address,
      zip_code,
      latitude,
      longitude,
    }: ICreateStoreMutation) => {
      return await axios.post('http://localhost:8000/store/', {
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
