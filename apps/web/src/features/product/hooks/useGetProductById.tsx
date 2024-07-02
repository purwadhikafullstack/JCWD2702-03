import { useGetProductByIdQuery } from '../api/useGetProductByIdQuery';

export const useGetProductById = (id: string) => {
  const { data, refetch } = useGetProductByIdQuery(id);

  return {
    data,
    refetch,
  };
};
