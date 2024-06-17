export interface Product {
    id: number;
    quantity: number;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    userUid: string;
    productId: number;
    product: {
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
    };
  }
  
  export interface CartProductItemProps {
    cartItem: Product;
    isSelected: boolean;
    onSelect: () => void;
    onQuantityChange: (newQuantity: number) => void;
    onDelete: () => void;
  }
  
  export interface CheckboxProps {
    checked: boolean;
    onChange: () => void;
    label: string;
  }
  
  export interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
    className?: string;
  }