'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from './types';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import CartProductItem from './CartProductItem';
import Button from './Button';
import Checkbox from './Checkbox';

const CartProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [Cookies] = useCookies(['acsstkn']);
  const token = Cookies.acsstkn;
  const decode = jwt.decode(token) as JwtPayload;
  const useruid = decode?.uid;
  const router = useRouter();

  useEffect(() => {
    const storedUserId: string | null = useruid;
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setError(new Error('User ID not found in JWT'));
      setLoading(false);
    }
  }, [useruid]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        if (userId) {
          const response = await axios.get<Product[]>(
            `http://localhost:8000/cart/${userId}`,
          );
          setProducts(response.data);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartProducts();
  }, [userId]);

  const handleUpdateQuantity = async (cartId: number, newQuantity: number) => {
    try {
      await axios.put(`http://localhost:8000/cart/${cartId}`, { newQuantity });
      const response = await axios.get<Product[]>(
        `http://localhost:8000/cart/${userId}`,
      );
      setProducts(response.data);
    } catch (error: any) {
      setError(error);
    }
  };

  const handleDeleteProduct = async (cartId: number) => {
    try {
      await axios.delete(`http://localhost:8000/cart/${cartId}`);
      const updatedProducts = products.filter(
        (product) => product.id !== cartId,
      );
      setProducts(updatedProducts);
    } catch (error: any) {
      setError(error);
    }
  };

  const handleProductSelect = (productId: number) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId],
    );
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product.id));
    }
  };

  const handleCheckout = () => {
    const selectedProductDetails = products.filter((product) =>
      selectedProducts.includes(product.id),
    );

    localStorage.setItem(
      'selectedProductDetails',
      JSON.stringify(selectedProductDetails),
    );

    router.push(`/checkout`);
  };

  const totalPrice = products
    .filter((product) => selectedProducts.includes(product.id))
    .reduce(
      (acc, product) => acc + product.product.price * product.quantity,
      0,
    );

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
      </div>
    );

  return (
    <div className="container mx-auto py-14 px-4">
      <div className="flex items-center mb-4">
        <Checkbox
          checked={selectedProducts.length === products.length}
          onChange={handleSelectAll}
          label="Your Cart"
        />
      </div>
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((cartItem: Product) => (
              <CartProductItem
                key={cartItem.id}
                cartItem={cartItem}
                isSelected={selectedProducts.includes(cartItem.id)}
                onSelect={() => handleProductSelect(cartItem.id)}
                onQuantityChange={(newQuantity) =>
                  handleUpdateQuantity(cartItem.id, newQuantity)
                }
                onDelete={() => handleDeleteProduct(cartItem.id)}
              />
            ))}
          </div>
          <div className="mt-4 text-2xl font-semibold text-gray-800">
            Total Price: {formatRupiah(totalPrice)}
          </div>
          <Button
            onClick={handleCheckout}
            label="Checkout"
            className="mt-8 bg-green-500 text-white hover:bg-green-700"
            disabled={selectedProducts.length === 0}
          />
        </>
      ) : (
        <p className="text-xl text-gray-800">No products in cart.</p>
      )}
    </div>
  );
};

export default CartProducts;
