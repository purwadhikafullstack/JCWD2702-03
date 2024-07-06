'use client';
import { toast } from 'react-toastify';
import { useCreateAddressMutation } from '../api/useCreateAddressMutation';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { useGetAddressResult } from './useGetAddress';

export const useCreateAddress = () => {
  // const { refetch } = useGetAddressResult();
  const { mutate: mutationCreateAddress } = useCreateAddressMutation({
    onSuccess: (res: any) => {
      // refetch();
      location.reload();
      toast.success(res.data.massage, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    mutationCreateAddress,
  };
};
