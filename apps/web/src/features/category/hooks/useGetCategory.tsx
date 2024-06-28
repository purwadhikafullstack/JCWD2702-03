import { useGetCategoryQuery } from '../api/useGetCategoryQuery';

export const useGetCategory = () => {
  const { data, isLoading, refetch } = useGetCategoryQuery();

  return {
    dataCategory: data?.data,
    isLoading,
    refetch,
  };
};
