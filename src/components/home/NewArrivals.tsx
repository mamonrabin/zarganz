"use client";

import ProductsSlider from "@/src/slider/ProductsSlider";
import React, { useRef } from "react";


const NewArrivals = () => {
  const ref = useRef(null);
 

  return (
    <div ref={ref} className="Container mt-10">
      <h2
       
        className="text-center md:text-xl text-lg font-semibold tracking-widest"
      >
        WHAT’S NEW
      </h2>

      <div className="mt-4">
        <div
        >
          <ProductsSlider/>
        </div>
        <div className="flex justify-center mt-4">
          <button className="relative overflow-hidden bg-[#262626] px-8 py-2 text-white font-semibold md:text-sm text-[12px] cursor-pointer group">
  <span className="absolute inset-0 bg-[#AC0000]  scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out"></span>
  <span className="relative z-10">View All</span>
</button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
