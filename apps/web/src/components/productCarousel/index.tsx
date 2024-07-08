'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function CenterMode() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 1500,
    autoplay: true,
  };

  const { dataProduct } = useGetProduct();
  const nav = useRouter();

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledProducts = shuffleArray(dataProduct || []);

  return (
    <div className="slider-container py-10">
      <Slider {...settings}>
        {shuffledProducts?.map((product: any, i: number) => (
          <div key={i} className="px-5 py-6">
            <div
              onClick={() => {
                nav.push(`/shop/${product.id}`);
              }}
              className="card bg-base-100 shadow-xl cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <Image
                src={`http://localhost:8000/${product.ProductImage[0].productImage}`}
                alt={product.name}
                height={10000}
                width={10000}
                className="w-full h-40 object-cover mb-4 rounded-t-lg pt-5"
              />
              <div className="card-body p-4 text-center">
                <p className="font-semibold text-lg mb-2">{product.name}</p>
                <p className="text-base text-gray-700">
                  {product.price.toLocaleString('ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                  {product.DiscountProduct[0] ? (
                    <span className="bg-red-500 text-white ml-2 px-2 py-1 rounded-md text-sm font-bold">
                      {product.DiscountProduct[0].pieces}%
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
