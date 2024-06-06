// types.ts
export interface Cart {
    id: number;
    userId: string;
    productId: string;
    quantity: number;
    user?: User;
    product?: Product;
  }
  
  export interface CartData {
    userId: string;
    productId: string;
    quantity: number;
  }
  
  export interface User {
    id: string;
    carts: Cart[];
  }
  
  export interface Product {
    id: string;
    carts: Cart[];
  }
  