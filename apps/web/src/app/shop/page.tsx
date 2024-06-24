'use client';
import ProductCard from '@/components/productCard';
import { MdSearch } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { useGetCategory } from '@/features/category/hooks/useGetCategory';
import Image from 'next/image';

export default function ShopPage() {
  const [getName, setName] = useState('');
  const [getCategory, setCategory] = useState('');
  const { dataCategory } = useGetCategory();
  const [page, setPage] = useState(1);

  const [productName] = useDebounce(getName, 1000);
  const [category] = useDebounce(getCategory, 1000);
  const { dataProduct, isLoading } = useGetProduct(productName, category, page);
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const timeout = setTimeout(() => {
      setIsDebouncing(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [productName, category, page]);

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div>Loading...</div>
      </div>
    );
  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <div className="py-10 w-[50vw]">
          <fieldset className="w-full space-y-1 text-gray-800">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="flex">
              <label className="form-control">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <MdSearch className="w-5 h-5 text-gray-800" />
                    </button>
                  </span>
                  <input
                    type="search"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search Product...."
                    className="input input-bordered w-[50vw] text-center"
                  />
                </div>
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="px-[100px]">
        <h1 className="font-sans text-3xl font-bold tracking-wide">SHOP</h1>
        <div className="divider pb-10"></div>
        <div className="flex gap-10">
          <div className="flex flex-col w-[250px]">
            <select
              id="category"
              defaultValue=""
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="select select-md select-bordered w-[250px] bg-[#f3f3f3]"
            >
              <option value="">Category</option>
              {dataCategory?.map((category: any) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {isDebouncing ? (
              <div className="flex flex-col items-center justify-center">
                <span className="loading loading-bars loading-lg h-[50px]"></span>
                <div>Finding Product</div>
              </div>
            ) : dataProduct.length === 0 ? (
              <div className="text-center">Product Not Found</div>
            ) : (
              dataProduct.map((product: any, i: number) => {
                return (
                  <div key={i}>
                    <ProductCard
                      productId={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.ProductImage[0].productImage}
                      category={product.productCategory.name}
                      stock={product.StockProduct[0]}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
