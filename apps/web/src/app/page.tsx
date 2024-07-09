'use client';
import { SimpleSlider } from '@/components/carousel';
import ProductCard from '@/components/productCard';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { useGetCategory } from '@/features/category/hooks/useGetCategory';
import CardHelper from '@/components/cardHelper';
import SortByCategory from '@/components/sortByCategory';
import Image from 'next/image';
import { useFilterProduct } from '@/features/product/hooks/useFilterProduct';
import { Pagination } from 'antd';
import CenterMode from '@/components/productCarousel';

export default function Home() {
  const [getName, setName] = useState('');
  const [getCategory, setCategory] = useState('');
  const [page, setPage] = useState(1);

  const [productName] = useDebounce(getName, 1000);
  const [category] = useDebounce(getCategory, 1000);
  const { filterProduct, isLoading } = useFilterProduct(
    productName,
    category,
    page,
  );
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
    <div className="overflow-hidden min-h-screen">
      <SimpleSlider />
      <div className="flex justify-center">
        <Image
          src={'/fs.webp'}
          alt="logo"
          className="w-[70vw] sm:h-[300px] lg:h-[500px] mobile:h-[150px]"
          width={10000}
          height={10000}
        />
      </div>
      <h1 className="px-20 font-bold text-3xl tracking-wide hidden lg:block">
        Feature
      </h1>
      <div className="pb-5 bg-softed hidden lg:block">
        <CenterMode />
      </div>
      <div className="pt-5 flex flex-col-2">
        <div className="px-20 hidden lg:block">
          <SortByCategory />
        </div>

        <div className="">
          <div className="xxl:grid-cols-3 grid grid-cols-1 py-12 md:grid-cols-3 xl:grid-cols-3 gap-10 w-[100vw]">
            {isDebouncing ? (
              <div className="flex flex-col items-center justify-center h-full w-full">
                <span className="loading loading-bars loading-lg h-[50px]"></span>
                <div>Finding Product</div>
              </div>
            ) : filterProduct?.data.length === 0 ? (
              <div className="text-center">Product Not Found</div>
            ) : (
              filterProduct?.data.map((product: any, i: number) => {
                return (
                  <div key={product.id}>
                    <ProductCard
                      productId={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.ProductImage[0].productImage}
                      category={product.productCategory.name}
                      stock={product.StockProduct[0]}
                      discount={product.DiscountProduct[0]}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <Pagination
        className="flex justify-center py-10"
        current={page}
        pageSize={6}
        total={filterProduct.count}
        onChange={(page) => setPage(page)}
      />
      <div className="flex justify-center py-10">
        <div className="">
          <CardHelper />
        </div>
      </div>
    </div>
  );
}
