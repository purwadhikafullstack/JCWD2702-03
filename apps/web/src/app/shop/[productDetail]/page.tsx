'use client';
import { useGetProductById } from '@/features/product/hooks/useGetProductById';
import ProductDetailPage from '@/components/productDetail';
export default function ProductDetail(params: any) {
  const { data } = useGetProductById(params.params.productDetail);

  if (data === undefined)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div>Loading...</div>
      </div>
    );
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="flex items-center justify-center">
        <ProductDetailPage
          productId={data?.data?.data.id}
          name={data?.data?.data.name}
          price={data?.data?.data.price}
          description={data?.data?.data.description}
          images={data?.data?.data.ProductImage}
          category={data?.data?.data.productCategory.name}
          stock={data?.data?.data.StockProduct[0]}
        />
      </div>
    </div>
  );
}
