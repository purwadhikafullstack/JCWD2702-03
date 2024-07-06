import { useDeleteStoreMutation } from '../api/useDeleteStoreMutation';
import { useGetFilterStore } from './useGetFilterStore';
import { toast } from 'react-toastify';

export const useDeleteStore = (page: any) => {
  const { refetch: refetchFilterStore } = useGetFilterStore(page);
  const { deleteStore } = useDeleteStoreMutation({
    onSuccess: (res: any) => {
      console.log(res);
      toast.success(res.data.message);
      refetchFilterStore();
    },
    onError: (err: any) => {
      console.log(err);
      toast.error(err.response.data.message);
    },
  });
  return {
    deleteStore,
  };
};
