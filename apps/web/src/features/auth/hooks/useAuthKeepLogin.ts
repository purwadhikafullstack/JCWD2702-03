"use client"
import { useAuthKeepLoginMutation } from "../api/useAuthKeepLoginMutation";
import { useContext } from "react";
import { UserContext } from "../../../supports/context/userContext";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slice/userSlice";

export const useAuthKeepLogin = () => {
  const dispatch = useDispatch()
  const { mutate: mutationKeepLogin, isPending } = useAuthKeepLoginMutation({
    onSuccess: (res: any) => {
      dispatch(setUser({
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
        email: res.data.data.email,
        roleId: res.data.data.roleId
      }))
      
    },
    onError: (err: any) =>{
    }
  })

  return{
    mutationKeepLogin,
    isPending
  }
}