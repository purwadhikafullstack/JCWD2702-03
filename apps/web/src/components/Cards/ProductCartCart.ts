import React, { useEffect, useState } from "react";
import { Button, Checkbox, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, cn, useDisclosure } from "@nextui-org/react";
import { IoAddCircleOutline, IoRemoveCircleOutline, IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { changeQuantity, deleteOrder, selectProductCart } from "../../redux/features/cart";
import Link from "next/link";


interface DataCart {
  id: number;
  status: boolean;
  quantity: number;
  product: {
    product_price: number;
    product_name: string;
    product_images: { image: string }[];
    brand: { brand_name: string };
    category: { category_type: string };
    stocks: { stocks: number }[];
 
  };
}

const ProductCartCard: React.FC<{ dataCart: DataCart }> = ({ dataCart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");

  const { id, status, quantity, product } = dataCart;

  const productPrice = product?.product_price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleSelectProductCart = (cartStatus: boolean) => {
    dispatch(selectProductCart(token, id, cartStatus ? "unchecked" : "checked"));
  };

  return (
//     <div className="product-cart-card py-4">
//       <div className="container flex">
//         <div className="mt-6">
//           <Checkbox
//             classNames={{
//               base: cn("max-w-full w-full"),
//               label: "w-full",
//             }}
//             size="lg"
//             defaultChecked={status}
//             value={product?.product_name}
//             onChange={() => handleSelectProductCart(status)}
//           ></Checkbox>
//         </div>
//         <div className="product-cart-card-wrapper w-full flex gap-2 justify-between ml-2">
//           <div className="product-card-img-wrapper">
//             <Link href={`/product/${product?.product_name}`}>
//               <a>
//                 <Image
//                   src={`${process.env.REACT_APP_IMAGE_API}${product?.product_images[0]?.image.substring(7)}`}
//                   alt=""
//                   className="product-image aspect-square w-24 md:w-28 rounded-lg object-contain bg-white"
//                 />
//               </a>
//             </Link>
//           </div>
//           <div className="product-cart-info w-full">
//             <div className="product-detail ml-1">
//               <Link href={`/product/${product?.product_name}`}>
//                 <a>
//                   <p className="product-title md:font-medium text-body-md md:text-body-lg line-clamp-1">
//                     {product?.product_name}
//                   </p>
//                 </a>
//               </Link>
//               <div className="flex gap-1 md:gap-2">
//                 <p className="text-[10px] md:text-label-lg ">
//                   {product?.brand.brand_name} • {product?.category.category_type}
//                 </p>
//               </div>
//               <p className="price text-body-md md:text-price-sm font-bold">{productPrice}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="product-cart-actions">
//           <div className="bottom-right flex items-center justify-end md:justify-end gap-24 md:gap-8 mt-2">
//             <div className="hidden md:block">
//               <Button isIconOnly variant="light" size="sm" radius="full" onPress={onOpen}>
//                 <IoTrashOutline size={24} color="#f00" />
//               </Button>
//             </div>
//             {/* Quantity Controller */}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal isOpen={isOpen} onClose={onClose} placement="center">
//         <ModalContent>
//           <ModalHeader className="flex flex-col gap-1">Warning</ModalHeader>
//           <ModalBody>
//             <p>Remove this product from your cart?</p>
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="ghost" onPress={onClose}>
//               <p className="font-medium">Cancel</p>
//             </Button>
//             <Button className="bg-red-600" onPress={() => { onClose(); dispatch(deleteOrder(token, id)); }}>
//               <p className="font-medium text-white">Remove</p>
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </div>
  );
};

export default ProductCartCard;
