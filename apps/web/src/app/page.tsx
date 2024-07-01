'use client';
import { SimpleSlider } from '@/components/carousel';
import ProductCard from '@/components/productCard';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { useGetCategory } from '@/features/category/hooks/useGetCategory';
import CardHelper from '@/components/cardHelper';
import SortByCategory from '@/components/sortByCategory';
export default function Home() {
  const [getName, setName] = useState('');
  const { dataCategory } = useGetCategory();
  const productName: any = useDebounce(getName, 1000);
  const { dataProduct, isLoading } = useGetProduct();

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div>Loading...</div>
      </div>
    );
  return (
    <div className="overflow-hidden min-h-screen">
      <SimpleSlider />
      <div className="pt-10 flex flex-col-2 min-h-screen">
        <div className="px-20">
          <SortByCategory />
        </div>
        <div className="bg-blue-100 w-[65vw]">
          <div className="grid grid-cols-3 gap-10">
            {/* {dataProduct.map((product: any, i: number) => {
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
            })} */}
          </div>
        </div>
      </div>

      <div className="flex justify-center py-10">
        <div className=''>
          <CardHelper />
        </div>
      </div>
    </div>
  );
}
