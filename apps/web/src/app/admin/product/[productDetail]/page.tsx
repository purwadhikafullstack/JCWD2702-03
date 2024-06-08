'use client';
import { useGetProductById } from '@/features/product/hooks/useGetProductById';
import ProductDetailPage from '../../../../components/productDetailAdmin/index';
export default function ProductDetail(params: any) {
  const { data } = useGetProductById(params.params.productDetail);

  if (data === undefined) return <div>Loading....</div>;

  return (
    <div className="min-h-screen overflow-hidden">
      <div>
        <ProductDetailPage
          productId={data?.data?.data.id}
          name={data?.data?.data.name}
          price={data?.data?.data.price}
          description={data?.data?.data.description}
          image={data?.data?.data.ProductImage[0].productImage}
          category={data?.data?.data.productCategory.name}
        />
      </div>
    </div>
  );
}
