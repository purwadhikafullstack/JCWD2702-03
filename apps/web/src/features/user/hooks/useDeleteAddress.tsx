import { useDeleteAddressMutation } from "../api/useDeleteAddressMutation";
import { toast } from "react-toastify";
import { useGetAddressResult } from "./useGetAddress";
export const useDeleteAddress = () => {
  const { refetch } = useGetAddressResult();
  const { mutate: deleteAddress } = useDeleteAddressMutation({
    onSuccess: (res: any) => {
      refetch();
      toast.success(res.data.message);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    deleteAddress,
  };
}