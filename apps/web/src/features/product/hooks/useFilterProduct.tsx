import { useFilterProductQuery } from '../api/useFilterProductQuery';

export const useFilterProduct = (
  productName: string,
  category: any,
  page: any,
) => {
  const {
    data: mutateFilterProduct,
    isLoading,
    refetch,
  } = useFilterProductQuery(productName, category, page);

  return {
    filterProduct: mutateFilterProduct?.data,
    isLoading,
    refetch,
  };
};
