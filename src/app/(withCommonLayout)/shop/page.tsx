
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

  const filteredProducts =
    selectedCategory === "all"
      ? productList
      : productList.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-[#FAFAF9] z-50 w-full"
        titleStyle="lg:hidden"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30 scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
        MenuIconStyle2="text-[#262626]"
      />

      <div className="Container pb-10 pt-24">
        {/* Page Heading */}
        <div className="mb-6 flex flex-col justify-between gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[3px] text-[#AC0000]">
              ZARGANZ COLLECTION
            </p>
            <h1 className="font-serif text-3xl font-medium tracking-tight text-[#262626] sm:text-4xl">
              Discover Our Products
            </h1>
            <p className="mt-1.5 text-xs text-gray-500">
              Find your style. Make your statement.
            </p>
          </div>

          <p className="text-xs text-gray-500">
            <span className="font-semibold text-[#262626]">
              {filteredProducts.length}
            </span>{" "}
            Products
          </p>
        </div>

        {/* Categories */}
        <div className="mb-5">
          <ShopCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Filter Toolbar */}
        <div className="mb-5 flex items-center justify-between border-y border-gray-200 py-3">
          <div className="flex items-center gap-2">
            <span className="hidden text-[11px] font-medium uppercase tracking-wider text-gray-400 sm:block">
              Browse
            </span>
            <SortShop />
          </div>

          <ShopResponsiveBar />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="min-w-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
            <p className="font-serif text-2xl text-[#262626]">
              No products found
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Try selecting another category.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="mt-4 border-b border-[#AC0000] pb-1 text-xs font-semibold text-[#AC0000] transition hover:opacity-70"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
