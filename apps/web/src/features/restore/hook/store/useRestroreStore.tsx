import { useRestoreStoreMutation } from '../../api/store/useRestoreStoreMutation';
import { useGetRestoreStore } from './useGetRestoreStore';

import { toast } from 'react-toastify';

export const useRestoreStore = () => {
  const { refetch } = useGetRestoreStore();
  const { mutateAsync: restoreStore } = useRestoreStoreMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.success(err.response.data.message);
    },
  });
  return {
    restoreStore,
  };
};
