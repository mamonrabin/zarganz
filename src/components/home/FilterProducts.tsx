"use client";

import React, { useState } from "react";



import { productList } from "@/src/api/productsApi";
import { categoryList } from "@/src/api/categoryApi";
import FilterProductSlider from "@/src/slider/FilterProductSlider";
import Link from "next/link";



const FilterProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  console.log(productList,"productList");

  const filteredProducts =
    selectedCategory === "All"
      ? productList
      : productList.filter((product) => product.category === selectedCategory);

 

  return (
    <div className="Container overflow-hidden">
      <div className="flex items-center flex-col">
        {/* TAKE A LOOK */}
        <p
          className="md:text-base text-[12px] font-medium text-[#646464] mb-2"
          
        >
          TAKE A LOOK
        </p>

        {/* Categories */}
        <div className="flex items-center flex-wrap justify-center gap-4 cursor-pointer">
          {categoryList?.map((category, i) => (
            <li
              key={category.id}
              
              onClick={() => setSelectedCategory(category.category)}
              className={`list-none duration-300 uppercase font-semibold tracking-wider cursor-pointer ${
                selectedCategory === category.category
                  ? "md:text-base text-[12px] text-[#AC0000]"
                  : "md:text-base text-[12px] text-gray-500 hover:text-[#AC0000] duration-300"
              }`}
            >
              {category.category}
            </li>
          ))}
        </div>
      </div>

      {/* Product Slider */}
      <div
        className="mt-6"
       
      >
        <FilterProductSlider filteredProducts={filteredProducts} />

        <div className="flex justify-center mt-6">
         <Link href="/shop">
          <button className="relative overflow-hidden bg-[#262626] px-8 py-2 text-white font-semibold md:text-sm text-[12px] cursor-pointer group">
            <span className="absolute inset-0 bg-[#AC0000]  scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out"></span>
            <span className="relative z-10">View All</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
