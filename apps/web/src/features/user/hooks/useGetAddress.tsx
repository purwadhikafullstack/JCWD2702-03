import { useGetAddressQuery } from '../api/useGetAddressQuery';

export const useGetAddressResult = () => {
  const { data, isLoading, refetch } = useGetAddressQuery();
  
  return {
    dataAddress: data?.data.data,
    isLoading,
    refetch,
  };
};
