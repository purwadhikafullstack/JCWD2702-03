import { useRestoreCategoryByIdMutation } from '../../api/category/useRestoreCategoryByIdMutation';
import { useGetRestoreCategory } from './useGetRestoreCategory';
import { toast } from 'react-toastify';
export const useRestoreCategoryById = () => {
  const { getRestoreCateogry } = useGetRestoreCategory();
  const { mutateAsync: restoreCategoryById } = useRestoreCategoryByIdMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      getRestoreCateogry();
    },
    onError: (err: any) => {
      toast.success(err.response.data.message);
    },
  });
  return {
    restoreCategoryById,
  };
};
