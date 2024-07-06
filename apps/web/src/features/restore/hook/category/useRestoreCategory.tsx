import { useRestoreCategoryMutation } from '../../api/category/useRestoreCategoryMutation';
import { useGetRestoreCategory } from './useGetRestoreCategory';
import { toast } from 'react-toastify';

export const useRestoreCategory = () => {
  const { getRestoreCateogry } = useGetRestoreCategory();
  const { mutateAsync: restoreCategory } = useRestoreCategoryMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      getRestoreCateogry();
    },
    onError: (err: any) => {
      toast.success(err.response.data.message);
    },
  });
  return {
    restoreCategory,
  };
};
