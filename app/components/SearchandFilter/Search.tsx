"use client";
import React, { useState } from "react";
import Product from "../../page"; 
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";


function SearchAndFilter({ products }: { products: Product[] }) {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");


  const categories = Array.from(new Set(products.map((product) => product.category)));

  
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedCategory ? product.category === selectedCategory : true)
    );
  });

  return (
    <div>
      <div className="mt-[30px] lg:flex">
      <div className="ml-[50px] lg:ml-[100px] lg:mt-[30px] lg:mb-4">
     
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by product name"
          className="p-2 border rounded bg-slate-100"
        />
      </div>

      
      <div className="mt-[10px] ml-[50px] lg:mt-[35px] lg:ml-[870px] lg:mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded"
        >
          
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="grid grid-cols-1 ml-[30px] md:grid-cols-3 lg:ml-[80px] lg:grid-cols-3 gap-6 p-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/Products/${product._id}`} passHref>
              <Image
                src={urlFor(product.imageUrl).url()}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <p className="font-semibold text-lg text-gray-800 truncate">
                {product.name}
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xl font-bold text-gray-900">${product.price}</p>
                <p className="text-sm text-green-600">{product.discountPercent}% off</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchAndFilter;
