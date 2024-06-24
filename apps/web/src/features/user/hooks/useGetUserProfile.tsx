import { useGetUserProfileQuery } from "../api/useGetUserProfileQuery"

export const useGetUserProfileResult = (id: number) =>{
  const { data } = useGetUserProfileQuery(id)
  return{
    data
  }
}