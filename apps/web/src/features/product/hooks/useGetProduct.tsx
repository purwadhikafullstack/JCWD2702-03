import { useGetProductQuery } from '../api/useGetProductQuery';

export const useGetProduct = (productName: string, category: any) => {
  const { data: mutateGetProduct, isLoading } = useGetProductQuery(
    productName,
    category,
  );

  return {
    dataProduct: mutateGetProduct?.data?.data,
    isLoading,
  };
};
