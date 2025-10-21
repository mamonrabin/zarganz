"use client";


import { productList } from "@/src/api/productsApi";
import ProductsSlider from "@/src/slider/ProductsSlider";






const HotProducts = () => {
 
  return (
    <div className="Container my-10 overflow-hidden">
      {/* Heading animation */}
      <h2
       
        className="text-center md:text-xl text-lg font-semibold tracking-widest"
      >
        HOTTEST THIS WEEK
      </h2>

      <div className="mt-6">
        {/* Slider animation */}
        <div
          
        >
          <ProductsSlider products={productList} />
        </div>

        {/* Button animation */}
        <div className="flex items-center justify-center mt-6" >
          <button className="relative overflow-hidden bg-[#262626] px-8 py-2 text-white font-semibold md:text-sm text-[12px] cursor-pointer group">
  <span className="absolute inset-0 bg-[#AC0000]  scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out"></span>
  <span className="relative z-10">View All</span>
</button>
        </div>
      </div>
    </div>
  );
};

export default HotProducts;
