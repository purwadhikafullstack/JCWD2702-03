import { useGetFilterCategoryQuery } from '../api/useGetFilterCategoryQuery';

export const useGetFilterCategory = (page: number) => {
  const { data, isLoading, refetchCategory } = useGetFilterCategoryQuery(page);

  return {
    filterCategory: data?.data,
    isLoading,
    refetchCategory,
  };
};
