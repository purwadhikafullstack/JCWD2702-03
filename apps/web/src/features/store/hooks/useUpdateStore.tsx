import { useUpdateStoreMutation } from '../api/useUpdateStoreMutation';
import { toast } from 'react-toastify';
import { useGetStoreQuery } from '../api/useGetStoreQuery';

export const useUpdateStore = () => {
  const { refetch } = useGetStoreQuery();
  const { mutateAsync: updateStore } = useUpdateStoreMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    updateStore,
  };
};
