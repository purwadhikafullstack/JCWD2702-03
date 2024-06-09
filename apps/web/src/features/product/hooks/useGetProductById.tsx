import { useGetProductByIdQuery } from '../api/useGetProductByIdQuery';

export const useGetProductById = (id: string) => {
  const { data } = useGetProductByIdQuery(id);

  return {
    data,
  };
};
