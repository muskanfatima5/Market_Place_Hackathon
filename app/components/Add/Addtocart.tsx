// "use client";
// import { useRouter } from "next/navigation";


// const AddToCart: React.FC<any> = ({
//   productId,
//   productName,
//   productPrice,
//   productImage,
// }) => {
//   const router = useRouter();

//   const handleAddToCart = () => {
//     const cartItem = {
//       productId,
//       productName,
//       productPrice,
//       productImage,
//     };

//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     existingCart.push(cartItem);

//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     router.push("/cart");
//   };

//   return (
//     <button
//       onClick={handleAddToCart}
//       className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3 mb-[30px]"
//     >
//       Add to Cart
//     </button>
//   );
// };

// export default AddToCart;
// "use client";
// import { useRouter } from "next/navigation";

// // Define a specific type for the props
// interface addToCart {
//   productId: string;
//   productName: string;
//   productPrice: number;
//   productImage: string;
// }

// const AddToCart: React.FC<addToCart> = ({
//   productId,
//   productName,
//   productPrice,
//   productImage,
// }) => {
//   const router = useRouter();

//   const handleAddToCart = () => {
//     const cartItem = {
//       productId,
//       productName,
//       productPrice,
//       productImage,
//     };

//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     existingCart.push(cartItem);

//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     router.push("/cart");
//   };

//   return (
//     <button
//       onClick={handleAddToCart}
//       className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3 mb-[30px]"
//     >
//       Add to Cart
//     </button>
//   );
// };

// export default AddToCart;









// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// type Cart = {
//   productId: string;
//   productName: string;
//   productPrice: number;
//   productImage: string;
// }

// const AddToCart: React.FC<Cart> = ({ productId, productName, productPrice, productImage }) => {
//   const router = useRouter();
//   const [quantity, setQuantity] = useState(1);

//   const handleIncrease = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     const cartItem = {
//       productId,
//       productName,
//       productPrice,
//       productImage,
//       quantity,
//     };

//     // Retrieve existing cart from localStorage, or initialize a new one
//     const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

//     // Check if the product already exists in the cart
//     const existingItemIndex = savedCart.findIndex(
//       (item: { productId: string; productName: string; productPrice: number; productImage: string; quantity: number }) => item.productId === productId
//     );

//     if (existingItemIndex >= 0) {
//       // If product already exists, update quantity
//       savedCart[existingItemIndex].quantity += quantity;
//     } else {
//       // Otherwise, add new product to the cart
//       savedCart.push(cartItem);
//     }

//     // Save updated cart to localStorage
//     localStorage.setItem("cart", JSON.stringify(savedCart));

//     // Navigate to the cart page
//     router.push("/cart");
//   };

//   return (
//     <div>
//       <div className="flex items-center space-x-2 mb-4">
//         <button
//           onClick={handleDecrease}
//           className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
//         >
//           -
//         </button>
//         <input
//           type="number"
//           min="1"
//           value={quantity}
//           onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
//           className="w-16 text-center border px-2 py-1 rounded-md"
//         />
//         <button
//           onClick={handleIncrease}
//           className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
//         >
//           +
//         </button>
//       </div>

//       <button
//         onClick={handleAddToCart}
//         className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default AddToCart;


"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type AddToCartProps = {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
};

const AddToCart: React.FC<AddToCartProps> = ({
  productId,
  productName,
  productPrice,
  productImage,
}) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      productId,
      productName,
      productPrice,
      productImage,
      quantity,
    };

    // Retrieve existing cart from localStorage, or initialize a new one
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product already exists in the cart
    const existingItemIndex = savedCart.findIndex(
      (item: { productId: string; productName: string; productPrice: number; productImage: string; quantity: number }) => item.productId === productId
    );

    if (existingItemIndex >= 0) {
      // If product already exists, update quantity
      savedCart[existingItemIndex].quantity += quantity;
    } else {
      // Otherwise, add new product to the cart
      savedCart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(savedCart));

    // Navigate to the cart page
    router.push("/cart");
  };

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={handleDecrease}
          className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="w-16 text-center border px-2 py-1 rounded-md"
        />
        <button
          onClick={handleIncrease}
          className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
