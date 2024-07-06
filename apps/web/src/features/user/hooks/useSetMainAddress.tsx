'use client';
import { toast } from 'react-toastify';
import { useGetAddressResult } from './useGetAddress';
import { useSetMainAddressMutation } from '../api/useSetMainAddressMutation';
export const useSetMainAddress = () => {
  const { refetch } = useGetAddressResult();
  const { mutate: setMainAddress } = useSetMainAddressMutation({
    onSuccess: (res: any) => {
      refetch();
      toast.success(res.data.massage);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    setMainAddress,
  };
};
