'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const DetailProductCheckout: React.FC = () => {
  const [selectedProductDetails, setSelectedProductDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedProductsString = localStorage.getItem('selectedProductDetails');
    if (storedProductsString) {
      const storedProducts = JSON.parse(storedProductsString) as any[];
      setSelectedProductDetails(storedProducts);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (selectedProductDetails.length === 0) {
    return <p>No products selected.</p>;
  }

  return (
    <div className="container mx-auto py-14 px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Selected Products
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {selectedProductDetails.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md p-4"
          >
            <div className="mt-4">
              {product.product.ProductImage.map((image: any) => (
                <Image
                  key={image.id}
                  src={`/${image.productImage}`}
                  alt={product.product.name}
                  className="w-full h-auto mb-2"
                  width={200}
                  height={200}
                />
              ))}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.product.name}
            </h2>
            <p className="text-gray-600 mb-2">{product.product.description}</p>
            <p className="text-gray-800 mb-2">Price: {product.product.price}</p>
            <p className="text-gray-800 mb-2">Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailProductCheckout;
