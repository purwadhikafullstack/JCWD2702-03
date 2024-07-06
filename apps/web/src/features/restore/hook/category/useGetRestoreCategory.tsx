import { useGetRestoreCategoryQuery } from '../../api/category/useGetRestoreCategoryQuery';

export const useGetRestoreCategory = () => {
  const {
    data,
    isLoading,
    refetch: getRestoreCateogry,
  } = useGetRestoreCategoryQuery();

  return {
    dataRestoreCategory: data?.data,
    isLoading,
    getRestoreCateogry,
  };
};
