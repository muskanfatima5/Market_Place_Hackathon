// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Foot from "../Foot/page";
// import Header from "../Head/page";
// import Link from "next/link";

// interface CartItem {
//   productId: string;
//   productName: string;
//   productPrice: number;
//   productImage: string;
//   quantity: number;
// }

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     // Get cart items from localStorage
//     const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartItems(savedCart);
//   }, []);

//   const handleRemoveItem = (productId: string) => {
  //   const updatedCart = cartItems.filter((item) => item.productId !== productId);
  //   setCartItems(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  // const handleChangeQuantity = (productId: string, newQuantity: number) => {
  //   const updatedCart = cartItems.map((item) =>
  //     item.productId === productId
  //       ? { ...item, quantity: newQuantity }
  //       : item
  //   );
  //   setCartItems(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  // const calculateTotalPrice = () => {
  //   return cartItems.reduce(
  //     (total, item) => total + item.productPrice * item.quantity,
  //     0
  //   );
  // };

//   return (
//     <>
//      <div className="w-[390px] h-[500px] lg:w-[1440px] lg:h-auto">
//     <Header />
//      <div className="lg:mx-[100px] lg:my-[25px]">
//      <img src="/images4/Line5.png" alt="line" />
//      </div>
//      <div className=" flex gap-2 ml-[16px] mt-[20px] lg:ml-[100px] lg:mt-[25px]">
//  <Link href="./Home">
//  <p className="hover:bg-slate-300 text-gray-500">Home</p>
// </Link>
// <img src="./images/arrow.png" />
// <p>Cart</p>
//  </div>
//  <div >
// <img src="/images4/your.png" alt="head" className="w-[207px] h-[38px] ml-[16px] mt-[25px] mb-[30px] lg:w-[259px] lg:h-[48px] lg:ml-[100px] lg:mb-[30px]" />
//  </div>
//     <div className="container lg:mx-auto p-4">
//       {cartItems.length === 0 ? (
//         <p className="text-3xl mt-6">Your cart is empty.</p>
//       ) : (
//         <div className="mt-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.productId}
//               className="flex items-center space-x-4 border-b py-4"
//             >
//               <Image
//                 src={item.productImage} */}
//                 alt={item.productName}
//                 width={100}
//                 height={100}
//                 className="object-cover"
//               />
              // <div className="flex-1">
              //   <h2 className="font-semibold">{item.productName}</h2>
              //   <p className="text-xl">${item.productPrice}</p>
              // </div>

              // <div className="flex flex-col lg:flex lg:flex-row items-center space-x-2">
              //   <div className="flex items-center space-x-2">
              //   <button
              //     onClick={() =>
              //       handleChangeQuantity(item.productId, item.quantity - 1)
              //     }
              //     disabled={item.quantity <= 1}
              //     className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
              //   >
              //     -
              //   </button>
              //   <input
              //     type="number"
              //     min="1"
              //     value={item.quantity}
              //     onChange={(e) =>
              //       handleChangeQuantity(item.productId, Math.max(1, +e.target.value))
              //     }
              //     className="w-16 text-center border px-2 py-1 rounded-md"
              //   />
              //   <button
              //     onClick={() =>
              //       handleChangeQuantity(item.productId, item.quantity + 1)
              //     }
              //     className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
              //   >
              //     +
              //   </button>
              //   </div>
              //   <button
              //     onClick={() => handleRemoveItem(item.productId)}
              //     className="mt-[10px] bg-red-500 text-white lg:mt-[0px] px-4 py-2 rounded-md ml-4"
              //   >
              //     Remove
              //   </button>
              // </div>
      //       </div>
      //     ))}
      //   </div>
      // )}

      // {cartItems.length > 0 && (
      //   <div className="flex justify-between items-center mt-6">
      //     <div>
      //       <h3 className="text-xl font-semibold">Total: </h3>
      //       <p className="text-2xl font-bold">${calculateTotalPrice()}</p>
      //     </div>
      //     <div>
      //       <button
      //         onClick={() => router.push("/")}
      //         className="bg-blue-600 text-white px-6 py-2 rounded-md"
      //       >
      //         Continue Shopping
      //       </button>
//           </div>   
//         </div>   
//       )}    
//     </div>
//     <div className="mt-[230px] lg:mr-[0px] mr-[-15px]">
//     <Foot />
//     </div>
//     </div>
//     </>
//   );
// };

// export default CartPage;
