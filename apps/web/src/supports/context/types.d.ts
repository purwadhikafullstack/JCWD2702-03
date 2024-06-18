import React from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Product[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
  toggleCartItemQuantity: (id: string, value: 'inc' | 'dec') => void;
  onRemove: (product: Product) => void;
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotalQuantities: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext: React.Context<CartContextType | undefined>;
export const useCart: () => CartContextType;
export const CartProvider: React.FC<{ children: React.ReactNode }>;
