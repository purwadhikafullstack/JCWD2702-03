import { useUpdateStoreMutation } from '../api/useUpdateStoreMutation';
import { toast } from 'react-toastify';

export const useUpdateStore = () => {
  const { mutate: updateStore } = useUpdateStoreMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    updateStore,
  };
};
