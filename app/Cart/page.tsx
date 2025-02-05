"use client"
import Image from "next/image"
import Foot from "../Foot/page"
import Header from "../Head/page"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.productId !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="w-[390px] h-[500px] lg:w-[1440px] lg:h-[1437px]">
        <Header />
         <div className="lg:mx-[100px] lg:my-[25px]">
         <img src="/images4/Line5.png" alt="line" />
         </div>
         <div className=" flex gap-2 ml-[16px] mt-[20px] lg:ml-[100px] lg:mt-[25px]">
     <Link href="./Home">
     <p className="hover:bg-slate-300 text-gray-500">Home</p>
    </Link>
    <img src="./images/arrow.png" />
    <p>Cart</p>
     </div>
     <div >
    <img src="/images4/your.png" alt="head" className="w-[207px] h-[38px] ml-[16px] mt-[25px] mb-[30px] lg:w-[259px] lg:h-[48px] lg:ml-[100px] lg:mb-[30px]" />
     </div>
    <div className="container mx-auto p-4">
      {cartItems.length === 0 ? (
        <p className="text-2xl">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.productId} className="flex items-center space-x-4 border-b py-4">
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.productName}</p>
                <p>${item.productPrice}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(item.productId)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => router.push("/")}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Continue Shopping
      </button>
    </div>
    <Foot />
     </div>
  );
};

export default CartPage;
