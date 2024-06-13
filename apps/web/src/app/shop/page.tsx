'use client';
import ProductCard from '@/components/productCard';
import { MdSearch } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { useGetCategory } from '@/features/category/hooks/useGetCategory';

export default function ShopPage() {
  const [getName, setName] = useState('');
  const { dataCategory } = useGetCategory();

  const productName: any = useDebounce(getName, 1000);
  const { dataProduct, isLoading } = useGetProduct(productName);

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
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                {dataCategory?.map((category: any, i: number) => {
                  return (
                    <div key={i}>
                      <h2 className="py-2 text-sm font-semibold hover:text-softed cursor-pointer">
                        {category.name}
                      </h2>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {dataProduct.length === 0 ? (
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
