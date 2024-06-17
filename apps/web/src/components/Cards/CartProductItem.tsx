import React from 'react';
import Image from 'next/image';
import { CartProductItemProps } from './types';
import Checkbox from './Checkbox';
import Button from './Button';

const CartProductItem: React.FC<CartProductItemProps> = ({
  cartItem,
  isSelected,
  onSelect,
  onQuantityChange,
  onDelete,
}) => {
  const imagePath = cartItem.product.ProductImage[0]?.productImage;
  const validImagePath = imagePath && imagePath.startsWith('/')
    ? imagePath
    : `/${imagePath}`;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Image
        width={300}
        height={300}
        src={validImagePath || '/placeholder.png'}
        alt={cartItem.product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {cartItem.product.name}
        </h2>
        <p className="text-gray-600">{cartItem.product.description}</p>
        <p className="text-gray-800 mt-2">Price: {cartItem.product.price}</p>
        <Checkbox checked={isSelected} onChange={onSelect} label="Select" />
        <div className="flex items-center mt-4">
          <Button
            onClick={() => onQuantityChange(cartItem.quantity - 1)}
            label="-"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
            disabled={cartItem.quantity <= 1}
          />
          <span className="text-gray-800 mx-2">{cartItem.quantity}</span>
          <Button
            onClick={() => onQuantityChange(cartItem.quantity + 1)}
            label="+"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          />
          <Button
            onClick={onDelete}
            label="Delete"
            className="bg-red-500 hover:bg-red-600 text-white ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
