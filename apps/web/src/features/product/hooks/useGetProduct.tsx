import { useGetProductQuery } from '../api/useGetProductQuery';

export const useGetProduct = () => {
  const { data: mutateGetProduct, isLoading } = useGetProductQuery();

  return {
    dataProduct: mutateGetProduct?.data?.data,
    isLoading,
  };
};
