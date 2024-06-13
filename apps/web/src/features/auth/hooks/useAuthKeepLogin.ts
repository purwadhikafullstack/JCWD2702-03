"use client"
import { useAuthKeepLoginMutation } from "../api/useAuthKeepLoginMutation";
import { useContext } from "react";
import { UserContext } from "../../../supports/context/userContext";

export const useAuthKeepLogin = () => {
  const { dataUser, setDataUser } : any = useContext(UserContext);
  const { mutate: mutationKeepLogin } = useAuthKeepLoginMutation({
    onSuccess: (res: any) => {
      setDataUser({
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
        email: res.data.data.email,
        roleId: res.data.data.roleId
      })
      
    },
    onError: (err: any) =>{
    }
  })

  return{
    mutationKeepLogin
  }
}