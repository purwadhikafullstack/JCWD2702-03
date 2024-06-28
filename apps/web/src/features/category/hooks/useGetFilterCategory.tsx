import { useGetFilterCategoryQuery } from '../api/useGetFilterCategoryQuery';

export const useGetFilterCategory = (page: number) => {
  const { data, isLoading, refetch } = useGetFilterCategoryQuery(page);

  return {
    filterCategory: data?.data,
    isLoading,
    refetch,
  };
};
