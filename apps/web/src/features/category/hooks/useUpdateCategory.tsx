import { useUpdateCategoryMutation } from '../api/useUpdateCategoryMutation';
import { toast } from 'react-toastify';
import { useGetCategory } from './useGetCategory';
import { useGetFilterCategory } from './useGetFilterCategory';
export const useUpdateCategory = (page: any) => {
  const { refetchCategory } = useGetFilterCategory(page);
  const { mutateAsync: updateCategory } = useUpdateCategoryMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetchCategory();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    updateCategory,
    refetchCategory,
  };
};
