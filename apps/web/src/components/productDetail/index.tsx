'use client';
import { useState } from 'react';
import Image from 'next/image';
export default function ProductDetailPage({
  productId,
  name,
  price,
  image,
  description,
  category,
}: any) {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity((e) => e + 1);
  };

  const decrement = () => {
    setQuantity((f) => f - 1);
  };
  return (
    <div className="min-h-screen">
      <div className="py-10">
        <h1 className="text-4xl font-semibold pb-10">{name}</h1>
        <div className="flex gap-10">
          <Image
            src={'http://localhost:8000/' + image}
            alt="gambar product"
            width={10000}
            height={10000}
            priority={true}
            quality={100}
            className="w-[600px] h-[600px] object-cover"
          />
          <div className="flex flex-col w-[40vw]">
            <div className="pb-4">
              <h1 className="text-2xl font-semibold pb-5">{name}</h1>
              <h1 className="pb-6 text-2xl font-semibold text-softed">
                {price.toLocaleString('ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}
              </h1>
              {/* <h1>
                <span className="font-semibold">Product ID</span> : {productId}
              </h1> */}
              <h1 className="py-2">
                <span className="font-semibold">Category</span> : {category}
              </h1>
              <h1 className="">
                <span className="font-semibold">Available Stok</span> : 50
              </h1>
            </div>
            <div className="flex items-center justify-start py-5">
              <button
                className="btn w-[5vw] bg-softed text-white"
                onClick={decrement}
                disabled={quantity === 1 ? true : false}
              >
                -
              </button>
              <span className="px-10">{quantity}</span>
              <button
                className="btn w-[5vw] bg-softed text-white"
                onClick={increment}
                // disabled={selectedSize?.stock === quantity ? true : false}
              >
                +
              </button>
            </div>
            <button className="btn w-[16vw] bg-softed text-white ext-[15px] tracking-wide hover:bg-softed">
              ADD TO CART
            </button>
            <h1 className="font-semibold py-5">Description</h1>
            <div className="text-justify">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}