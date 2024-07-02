import { useCreateStoreMutation } from '../api/useCreateStoreMutation';
import { toast } from 'react-toastify';
import { useGetStore } from './useGetStore'; // ngambil data semua store
import { useGetFilterStore } from './useGetFilterStore'; //  query pagination

export const useCreateStore = (page: any) => {
  const { refetch } = useGetFilterStore(page);
  const { mutateAsync: createStore } = useCreateStoreMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      console.log(res);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
      console.log(err);
    },
  });
  return {
    createStore,
  };
};
