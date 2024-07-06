import { useRestoreStoreByIdMutation } from '../../api/store/useRestoreStoreByIdMutation';
import { useGetRestoreStore } from './useGetRestoreStore';
import { toast } from 'react-toastify';
export const useRestoreStoreById = () => {
  const { refetch } = useGetRestoreStore();
  const { mutateAsync: restoreStoreById } = useRestoreStoreByIdMutation({
    onSuccess: (res: any) => {
      console.log(res);
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      console.log(err);
      toast.success(err.response.data.message);
    },
  });
  return {
    restoreStoreById,
  };
};
