import { useGetRestoreProductQuery } from '../../api/product/useGetRestoreProductQuery';

export const useGetRestoreProduct = () => {
  const { data, isLoading, refetch } = useGetRestoreProductQuery();

  return {
    dataRestoreProduct: data?.data,
    isLoading,
    refetch,
  };
};
