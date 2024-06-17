'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product, ApiResponse } from './types';
import Image from 'next/image';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [Cookies] = useCookies(['acsstkn']);
  const token = Cookies.acsstkn;
  const decode = jwt.decode(token) as JwtPayload | null;
  const userTokenUid = decode?.uid;
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ApiResponse>('http://localhost:8000/product');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId: number) => {
    try {
      if (!userTokenUid) {
        throw new Error('User ID not found in token');
      }

      const quantity = 1;

      const response = await axios.post('http://localhost:8000/cart/add', {
        userId: userTokenUid,
        productId,
        quantity,
      });

      if (response.status === 201) {
        toast.success('Product added to cart successfully'); // Success toast notification
      }
    } catch (error: any) {
      console.error('Error adding to cart:', error);
      if (error.response && error.response.status === 500) {
        toast.warn('This product is already in your cart'); // Warn toast notification for item already in cart
      } else if (error.message === 'User ID not found in token') {
        router.push('/auth/login');
      }
    }
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <ToastContainer /> {/* ToastContainer for displaying notifications */}
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              width={400}
              height={400}
              src={product.ProductImage[0]?.productImage.startsWith('/') ? product.ProductImage[0].productImage : `/${product.ProductImage[0]?.productImage}` || '/placeholder.png'}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-1">{product.price}</p>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-700">{product.productCategory.name}</p>
              <button
                onClick={() => addToCart(product.id)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
