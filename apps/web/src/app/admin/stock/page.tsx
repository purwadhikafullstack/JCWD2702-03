'use client';
import ModalCreateStock from '@/components/modalCreateStock';
import { useGetStock } from '@/features/stock/hooks/useGetStock';
import FormStock from '@/components/fromStock';

export default function StockPage() {
  const { dataStock, isLoading } = useGetStock();

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
          <FormStock stockData={dataStock} />
        </div>
      </div>
    </div>
  );
}
