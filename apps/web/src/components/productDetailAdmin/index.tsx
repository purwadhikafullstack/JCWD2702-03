import Image from 'next/image';
export default function ProductDetailPage({
  productId,
  name,
  price,
  image,
  description,
  category,
}: any) {
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">Detail Product</h1>
        <h1 className="text-2xl font-semibold pb-5">{name}</h1>
        <div className="flex gap-4">
          <Image
            src={'http://localhost:8000/' + image}
            alt="gambar product"
            width={10000}
            height={10000}
            priority={true}
            quality={100}
            className="w-[450px] h-[450px] object-cover"
          />
          <div className="flex flex-col px-4">
            <div className="pb-4">
              <h1 className="text-xl font-semibold pb-5">{name}</h1>
              <h1 className="pb-6 text-2xl font-semibold text-softed">
                {price.toLocaleString('ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}
              </h1>
              <h1>
                <span className="font-semibold">Product ID</span> : {productId}
              </h1>
              <h1 className="py-2">
                <span className="font-semibold">Category</span> : {category}
              </h1>
              <h1 className="pb-5">
                <span className="font-semibold">Available Stok</span> : 50
              </h1>
            </div>
            <h1 className="font-semibold pb-2">Description</h1>
            <div className="text-justify">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
