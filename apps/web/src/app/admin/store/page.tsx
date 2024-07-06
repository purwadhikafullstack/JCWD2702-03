'use client';

import { useGetStore } from '@/features/store/hooks/useGetStore';
import ModalCreateStore from '@/components/modalCreateStore';
import FormStorePage from '@/components/formStore';
import { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { useGetFilterStore } from '@/features/store/hooks/useGetFilterStore';
import Link from 'next/link';

export default function StorePage() {
  const [page, setPage] = useState(1);
  const { filterStore, isLoading } = useGetFilterStore(page);
  const { dataStore } = useGetStore();
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const timeout = setTimeout(() => {
      setIsDebouncing(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [page]);

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div></div>
      </div>
    );
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">STORE</h1>
        <div className="flex items-end justify-end gap-6 pt-10">
          <Link href={'/admin/store/restore'}>
            <button className="btn bg-gray-800 text-white hover:bg-gray-800">
              Restore Data
            </button>
          </Link>
          <ModalCreateStore page={page} />
        </div>
        <div>
          {isDebouncing ? (
            <div className="flex flex-col items-center justify-center">
              <span className="loading loading-bars loading-lg h-[50px]"></span>
              <div>Finding Store</div>
            </div>
          ) : (
            <div>
              <FormStorePage page={page} storeData={filterStore} />
            </div>
          )}
        </div>
      </div>
      <Pagination
        className="flex justify-center"
        current={page}
        pageSize={5}
        total={filterStore.count}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
}
