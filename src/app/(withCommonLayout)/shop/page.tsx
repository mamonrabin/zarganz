"use client";

import { useState } from "react";
import { productList } from "@/src/api/productsApi";
import Navbar from "@/src/components/header/Navbar";
import ProductCard from "@/src/components/products/ProductCard";
import ShopCategory from "@/src/components/shop/ShopCategory";
import ShopResponsiveBar from "@/src/components/shop/ShopResponsiveBar";
import SortShop from "@/src/components/shop/SortShop";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "all"
      ? productList
      : productList.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div>
      <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-white z-50 w-full"
        titleStyle="lg:hidden"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30  scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
        MenuIconStyle2="text-[#262626]"
      />

      <div className="py-4 lg:mt-12 mt-20">
        <ShopCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="flex items-center justify-between my-4 Container">
          <SortShop />
          <ShopResponsiveBar />
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 Container pb-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500 text-lg">
              No products found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
