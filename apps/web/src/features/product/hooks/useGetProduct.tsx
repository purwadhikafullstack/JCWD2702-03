import { useGetProductQuery } from '../api/useGetProductQuery';

export const useGetProduct = (productName: any) => {
  const { data: mutateGetProduct, isLoading } = useGetProductQuery(productName);

  return {
    dataProduct: mutateGetProduct?.data?.data,
    isLoading,
  };
};
