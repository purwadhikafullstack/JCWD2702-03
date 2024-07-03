'use client'
import { toast } from 'react-toastify';
import { useCreateAddressMutation } from '../api/useCreateAddressMutation';

export const useCreateAddress = () => {
  const { mutate: mutationCreateAddress } = useCreateAddressMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      console.log(res);
      
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    mutationCreateAddress,
  }
}