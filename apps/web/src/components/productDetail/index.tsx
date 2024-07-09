'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProductDetailPage({
  productId,
  name,
  price,
  images,
  description,
  category,
  stock,
  discount,
}: any) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [quantity, price]);

  const handleQuantityChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= stock.stock) {
      setQuantity(value);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="py-10">
        <h1 className="text-4xl font-semibold pb-10">{name}</h1>
        <div className="flex gap-10">
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
              className="w-[600px] h-[600px] object-cover"
            />
          ) : null}
          <div className="flex flex-col w-[40vw]">
            <div className="pb-4">
              <h1 className="text-2xl font-semibold pb-5">{name}</h1>
              <h1 className="pb-6 text-2xl font-semibold text-softed">
                {totalPrice.toLocaleString('ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}
                {discount ? (
                  <span className="bg-red-500 text-white ml-2 px-2 py-1 rounded-md text-sm font-bold">
                    {discount.pieces}%
                  </span>
                ) : null}
              </h1>
              <h1 className="py-2">
                <span className="font-semibold">Category</span> : {category}
              </h1>
              <div>
                <span className="font-semibold">Stock</span> :{' '}
                <span>
                  {stock ? (
                    stock.stock
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-start py-5">
              <button
                className="btn w-[5vw] bg-softed text-white"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                disabled={quantity === 1}
              >
                -
              </button>
              {stock ? (
                <input
                  type="text"
                  className="input mx-2 w-[5vw] text-center"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max={stock.stock}
                />
              ) : (
                <p className="mx-2 w-[5vw] text-center">0</p>
              )}
              {stock ? (
                <button
                  className="btn w-[5vw] bg-softed text-white"
                  onClick={() =>
                    setQuantity((prev) => Math.min(stock.stock, prev + 1))
                  }
                  disabled={quantity === stock.stock}
                >
                  +
                </button>
              ) : (
                <button className="btn w-[5vw] bg-softed text-white" disabled>
                  +
                </button>
              )}
            </div>
            <button
              className={`btn w-[16vw] bg-softed text-white text-[15px] tracking-wide hover:bg-softed ${
                stock ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!stock}
            >
              ADD TO CART
            </button>
            <h1 className="font-semibold py-5">Description</h1>
            <div className="text-justify">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 pt-4">
          {images?.map((image: any, index: number) => (
            <Image
              key={index}
              src={'http://localhost:8000/' + image.productImage}
              alt="thumbnail"
              width={1000}
              height={1000}
              priority={true}
              quality={100}
              className={`cursor-pointer object-cover h-[100px] w-[100px] ${
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
