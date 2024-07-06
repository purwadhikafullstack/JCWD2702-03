'use client';
import ModalCreateCategory from '@/components/modalCreateCategory';
import FormCategoryPage from '@/components/formCategory';
import { useGetCategory } from '@/features/category/hooks/useGetCategory';
import { Pagination } from 'antd';
import { useState, useEffect } from 'react';
import { useGetFilterCategory } from '@/features/category/hooks/useGetFilterCategory';
import Link from 'next/link';

export default function ProductAdminPage() {
  const [page, setPage] = useState(1);
  const { filterCategory, isLoading, refetchCategory } =
    useGetFilterCategory(page);
  const { dataCategory } = useGetCategory();
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
        <div>Finding Category</div>
      </div>
    );
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">CATEGORY PRODUCT</h1>
        <div className="flex items-end justify-end gap-6 pt-10">
          <Link href={'/admin/category/restore'}>
            <button className="btn bg-gray-800 text-white hover:bg-gray-800">
              Restore Data
            </button>
          </Link>
          <ModalCreateCategory page={page} />
        </div>

        <div className="h-full w-full overflow-x-auto">
          {isDebouncing ? (
            <div className="flex flex-col items-center justify-center">
              <span className="loading loading-bars loading-lg h-[50px]"></span>
              <div>Finding Category</div>
            </div>
          ) : filterCategory.length === 0 ? (
            <div className="text-center">Category Not Found</div>
          ) : (
            <div>
              <FormCategoryPage page={page} categoryData={filterCategory} />
            </div>
          )}
        </div>
      </div>
      <Pagination
        className="flex justify-center"
        current={page}
        pageSize={5}
        total={filterCategory.count}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
}
