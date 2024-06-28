import { useCreateStoreMutation } from '../api/useCreateStoreMutation';
import { toast } from 'react-toastify';
import { useGetStoreQuery } from '../api/useGetStoreQuery';

export const useCreateStore = () => {
  const { refetch } = useGetStoreQuery();
  const { mutateAsync: createStore } = useCreateStoreMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    createStore,
  };
};
