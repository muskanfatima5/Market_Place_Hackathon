"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AddToCartProps {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
}

const AddToCart: React.FC<AddToCartProps> = ({
  productId,
  productName,
  productPrice,
  productImage,
}) => {
  const router = useRouter();

  const handleAddToCart = () => {
    const cartItem = {
      productId,
      productName,
      productPrice,
      productImage,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push(cartItem);

    localStorage.setItem("cart", JSON.stringify(existingCart));
    router.push("/cart");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3 mb-[30px]"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
