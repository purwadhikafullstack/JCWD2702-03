'use client';
import ModalCreateProduct from '@/components/modalCreateProduct';
import FormProduct from '@/components/formProduct';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';

export default function ProductAdminPage() {
  const [getName, setName] = useState('');
  // const [isDebouncing, setIsDebouncing] = useState(false);

  const productName: any = useDebounce(getName, 1000);
  const { dataProduct, isLoading } = useGetProduct(productName);

  // useEffect(() => {
  //   setIsDebouncing(true);
  //   const timeout = setTimeout(() => {
  //     setIsDebouncing(false);
  //   }, 2000);
  //   return () => clearTimeout(timeout);
  // }, [productName]);

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div>Finding Product</div>
      </div>
    );
  return (
    <div className="min-h-screen">
      <div className="p-10">
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
        <div className="flex items-end justify-end">
          <ModalCreateProduct />
        </div>
        <div className="divider w-full"></div>
        <div className="h-full w-full overflow-x-auto">
          {dataProduct.length === 0 ? (
            <div className="text-center">Product Not Found</div>
          ) : (
            <FormProduct productData={dataProduct} />
          )}
        </div>
      </div>
    </div>
  );
}
