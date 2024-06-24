import { useGetCategoryQuery } from '../api/useGetCategoryQuery';

export const useGetCategory = () => {
  const { data, isLoading } = useGetCategoryQuery();

  return {
    dataCategory: data?.data?.data,
    isLoading,
  };
};
