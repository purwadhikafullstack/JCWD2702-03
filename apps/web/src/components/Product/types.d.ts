export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    categoryId: number;
    productCategory: {
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
    ProductImage: {
      id: number;
      productImage: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
      productId: number;
    }[];
  }
  
  export interface ApiResponse {
    error: boolean;
    message: string;
    data: Product[];
  }