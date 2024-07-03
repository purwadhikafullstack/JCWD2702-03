import { useGetCategoryByIdQuery } from '../api/useGetCategoryByIdQuery';

export const useGetCategoryById = (id: string) => {
  const { data, refetch } = useGetCategoryByIdQuery(id);

  return {
    dataCategoryById: data?.data?.data,
    refetch,
  };
};
