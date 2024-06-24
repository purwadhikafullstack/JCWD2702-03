'use client';

import { useGetStoreById } from '@/features/store/hooks/useGetStoreById';
import StoreDetailAdmin from '@/components/storeDetailAdmin';

export default function StoreDetailPage(params: any) {
  const { data } = useGetStoreById(params.params.storeDetail);

  if (data === undefined)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div>Loading..</div>
      </div>
    );
  return (
    <div className="min-h-screen overflow-hidden">
      <div>
        <StoreDetailAdmin
          storeid={data?.data?.data.id}
          name={data?.data?.data.name}
          province={data?.data?.data.province}
          city={data?.data?.data.city}
          address={data?.data?.data.address}
          zip_code={data?.data?.data.zip_code}
          latitude={data?.data?.data.latitude}
          longitude={data?.data?.data.longitude}
        />
      </div>
    </div>
  );
}
