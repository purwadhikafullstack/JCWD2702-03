'use client';
import AddressCard from '@/components/AddressCard';
import ModalCreateAddress from '@/components/modalCreateAddress';
import { useGetAddressResult } from '@/features/user/hooks/useGetAddress';

export default function AddressPage() {
  const { dataAddress, isLoading } = useGetAddressResult();

  return (
    <div className="w-[70vw] border rounded-b-lg">
      <div className="px-10 py-4 flex justify-between">
        <p className="font-semibold text-2xl">Daftar Alamat</p>
        <ModalCreateAddress />
      </div>

      <div className="px-10">
        <div className="flex flex-col gap-4 py-4 w-full h-full items-center">
          {isLoading ? (
            <div>
              <span className="loading loading-dots loading-md"></span>
            </div>
          ) : (
            dataAddress.map((item: any, index: number) => (
              <div key={index}>
                <AddressCard
                  addressId={item.id}
                  receipents={item.receipents}
                  province={item.province}
                  city={item.city}
                  address={item.address}
                  zip_code={item.zip_code}
                  phone_number={item.phone_number}
                  status={item.mainAddress}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
