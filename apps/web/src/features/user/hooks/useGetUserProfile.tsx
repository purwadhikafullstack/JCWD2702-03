import { useGetUserProfileQuery } from "../api/useGetUserProfileQuery"

export const useGetUserProfileResult = () =>{
  const { data } = useGetUserProfileQuery()
  
  return{
    dataUser: data?.data.data
  }
}