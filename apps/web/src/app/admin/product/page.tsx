'use client';
import ModalCreateProduct from '@/components/modalCreateProduct';
import FormProduct from '@/components/formProduct';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import { Pagination } from 'antd';
import { useFilterProduct } from '@/features/product/hooks/useFilterProduct';

export default function ProductAdminPage() {
  const [getName, setName] = useState('');
  const [getCategory, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [isDebouncing, setIsDebouncing] = useState(false);

  const [productName] = useDebounce(getName, 1000);
  const [category] = useDebounce(getCategory, 1000);
  const { filterProduct, isLoading } = useFilterProduct(
    productName,
    category,
    page,
  );

  useEffect(() => {
    setIsDebouncing(true);
    const timeout = setTimeout(() => {
      setIsDebouncing(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [productName, category, page]);

  const resetData = () => {
    window.location.reload();
  };

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div>Finding Product</div>
      </div>
    );

  return (
    <div className="min-h-screen">
      <div className="p-5">
        <Link href="/admin/product">
          <h1 className="text-3xl font-semibold pb-5">PRODUCT</h1>
        </Link>
        <div className="flex">
          <label className="form-control">
            <div className="label">
              <span className="label-text text-[18px]">Search Product :</span>
            </div>
            <input
              type="search"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Search Product"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="flex items-center justify-between py-5">
          <button
            onClick={resetData}
            className="btn bg-gray-800 text-white hover:bg-gray-800"
            type="reset"
          >
            Reset
          </button>
          <ModalCreateProduct />
        </div>
        <div className="h-full w-full overflow-x-auto">
          {isDebouncing ? (
            <div className="flex flex-col items-center justify-center">
              <span className="loading loading-bars loading-lg h-[50px]"></span>
              <div>Finding Product</div>
            </div>
          ) : filterProduct.length === 0 ? (
            <div className="text-center">Product Not Found</div>
          ) : (
            <FormProduct productData={filterProduct} />
          )}
        </div>
      </div>
      <Pagination
        className="flex justify-center"
        current={page}
        pageSize={5}
        total={filterProduct.count}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
}
