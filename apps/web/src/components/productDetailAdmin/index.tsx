'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProductDetailPageAdmin({
  productId,
  name,
  price,
  images,
  description,
  category,
  stock,
}: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">Detail Product</h1>
        <h1 className="text-2xl font-semibold pb-5">{name}</h1>
        <div className="flex gap-4">
          {images ? (
            <Image
              src={
                'http://localhost:8000/' +
                images[currentImageIndex].productImage
              }
              alt="gambar product"
              width={10000}
              height={10000}
              priority={true}
              quality={100}
              className="w-[450px] h-[450px] object-cover"
            />
          ) : null}
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
              {stock?.map((values: any) => {
                return (
                  <div className="flex gap-5">
                    <div>
                      <span className="font-semibold">Available Stock </span> :{' '}
                      {values.stock}
                    </div>
                    <div>
                      <span className="font-semibold">Available Store </span> :{' '}
                      {values.store.name}
                    </div>
                  </div>
                );
              })}
            </div>
            <h1 className="font-semibold pb-2">Description</h1>
            <div className="text-justify">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          {images?.map((image: any, index: number) => (
            <Image
              key={index}
              src={'http://localhost:8000/' + image.productImage}
              alt="thumbnail"
              width={1000}
              height={1000}
              priority={true}
              quality={100}
              className={`cursor-pointer object-cover h-[40px] w-[40px] ${
                currentImageIndex === index ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
