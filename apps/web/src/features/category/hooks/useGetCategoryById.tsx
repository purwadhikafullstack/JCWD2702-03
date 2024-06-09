import { useGetCategoryByIdQuery } from '../api/useGetCategoryByIdQuery';

export const useGetCategoryById = (id: string) => {
  const { data } = useGetCategoryByIdQuery(id);
  //   console.log(data);

  return {
    dataCategoryById: data?.data?.data,
  };
};
