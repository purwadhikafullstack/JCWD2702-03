'use client';

import { useGetStore } from '@/features/store/hooks/useGetStore';
import ModalCreateStore from '@/components/modalCreateStore';
import FormStorePage from '@/components/formStore';

export default function StorePage() {
  const { dataStore, isLoading } = useGetStore();

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div>Finding Store</div>
      </div>
    );
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">STORE</h1>
        <div className="flex items-end justify-end pt-10">
          <ModalCreateStore />
        </div>
        <div>
          <FormStorePage storeData={dataStore} />
        </div>
      </div>
    </div>
  );
}
