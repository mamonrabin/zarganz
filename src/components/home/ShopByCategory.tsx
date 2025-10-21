"use client";


import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import { categoryList } from "@/src/api/shopCategoryApi";
import Link from "next/link";



const ShopByCategory = () => {
  return (
    <div className="Container overflow-hidden mt-10">
      {/* Heading animation */}
      <h2
        className="text-center md:text-xl text-lg font-semibold tracking-widest"
        
      >
        SHOP BY CATEGORY
      </h2>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 gap-2 mt-4">
        {categoryList.slice(0, 3).map((category, i) => (
          <Link href="/shop" key={category.id}>
            <div
            
            className="border group border-primary/10 rounded-[2px] relative overflow-hidden cursor-pointer"
         
          >
            <Image
              src={category.image}
              alt="image"
              width={500}
              height={500}
              className="hover:scale-105 duration-700 transition-all"
            />

            <div className="flex items-center gap-1 hover:tracking-[0.5px] text-sm absolute bottom-4 font-medium px-4 group-hover:text-[#AC0000] duration-700 transition-all">
              <p>Explore {category.category}</p>
              <p className="group-hover:translate-x-1 duration-300 transition-all">
                <ArrowUpRight size={16} />
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
