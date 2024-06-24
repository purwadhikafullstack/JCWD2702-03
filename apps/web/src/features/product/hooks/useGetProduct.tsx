import { useGetProductQuery } from '../api/useGetProductQuery';

export const useGetProduct = (
  productName: string,
  category: any,
  page: any,
) => {
  const { data: mutateGetProduct, isLoading } = useGetProductQuery(
    productName,
    category,
    page,
  );

  return {
    dataProduct: mutateGetProduct?.data?.data,
    isLoading,
  };
};
