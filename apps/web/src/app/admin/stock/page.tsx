'use client';
import ModalCreateStock from '@/components/modalCreateStock';
import { useGetStock } from '@/features/stock/hooks/useGetStock';
import FormStock from '@/components/fromStock';
import { Pagination } from 'antd';
import { useDebounce } from 'use-debounce';
import { useState } from 'react';
import { useGetFilterStock } from '@/features/stock/hooks/useFilterStock';

export default function StockPage() {
  const [getAsc, setAsc] = useState('asc');
  const [getDesc, setDesc] = useState('desc');
  const [page, setPage] = useState(1);
  const [asc] = useDebounce(getAsc, 500);
  const [desc] = useDebounce(getDesc, 500);
  const { filterStock, isLoading } = useGetFilterStock(page, asc, desc);

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div>Finding Stock</div>
      </div>
    );
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">STOCK PRODUCT</h1>
        <div className="flex items-end justify-end pt-10">
          <ModalCreateStock />
        </div>
        <div>
          <FormStock stockData={filterStock} />
        </div>
      </div>
      <Pagination
        className="flex justify-center"
        current={page}
        pageSize={5}
        total={filterStock.count}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
}
