import CartProducts from '@/components/Cards/ProductCart';
import React from 'react';
import { useCart } from '@/supports/context/cartContext';

const page = () => {
  return (
    <div>
      <CartProducts />
    </div>
  );
};

export default page