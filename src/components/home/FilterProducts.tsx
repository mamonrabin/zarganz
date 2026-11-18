
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight} from "lucide-react";

import { productList } from "@/src/api/productsApi";
import { categoryList } from "@/src/api/categoryApi";
import FilterProductSlider from "@/src/slider/FilterProductSlider";

const FilterProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return productList;

    return productList.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  const categories = [
    { id: "all", category: "All" },
    ...categoryList,
  ];

  return (
    <section className="Container my-12 md:my-16 overflow-hidden">

      {/* =============================== */}
      {/* SECTION HEADING */}
      {/* =============================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-7 md:mb-9"
      >
        <div className="flex items-end justify-between gap-3">

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#AC0000]" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[3px] text-[#AC0000]">
                Explore Our Selection
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-[-1px] leading-none text-[#262626]">
              Take A{" "}
              <span className="font-serif italic font-normal text-[#AC0000]">
                Look.
              </span>
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[1.5px] text-[#262626] hover:text-[#AC0000] transition-colors group"
          >
            Explore All
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

        <div className="relative mt-5 h-px bg-gray-200">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "75px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-0 h-[2px] bg-[#AC0000]"
          />
        </div>
      </motion.div>

      {/* =============================== */}
      {/* CATEGORY NAVIGATION */}
      {/* =============================== */}

      <div className="relative mb-6">

        <div className="flex items-center justify-between gap-3 border-y border-gray-200 py-4">

          {/* Categories */}
          <div className="flex items-center gap-5 md:gap-8 overflow-x-auto scrollbar-hide whitespace-nowrap">

            {categories.map((category, index) => {
              const active =
                selectedCategory === category.category;

              return (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category.category)
                  }
                  whileTap={{ scale: 0.94 }}
                  className="relative shrink-0 group py-1"
                >
                  <span
                    className={`text-[10px] md:text-xs uppercase tracking-[1.5px] font-bold transition-colors duration-300 ${
                      active
                        ? "text-[#AC0000]"
                        : "text-gray-400 group-hover:text-[#262626]"
                    }`}
                  >
                    {category.category}
                  </span>

                  <motion.span
                    initial={false}
                    animate={{
                      scaleX: active ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="absolute left-0 right-0 bottom-[-5px] h-[2px] bg-[#AC0000] origin-left"
                  />
                </motion.button>
              );
            })}

          </div>

          {/* Product Count */}
          <div className="hidden md:flex shrink-0 items-center gap-2 pl-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC0000]" />
            <span className="text-[10px] uppercase tracking-wider text-gray-400">
              {filteredProducts.length} Items
            </span>
          </div>

        </div>
      </div>

      {/* =============================== */}
      {/* SELECTED CATEGORY INFO */}
      {/* =============================== */}

    <AnimatePresence mode="wait">
  <motion.div
    key={selectedCategory}
    initial={{ opacity: 0, x: -15 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 15 }}
    transition={{ duration: 0.3 }}
    className="flex items-center gap-3 mb-5"
  >
    <span className="w-[3px] h-9 bg-[#AC0000]" />

    <div>
      <p className="text-[9px] uppercase tracking-[2.5px] text-gray-400 font-semibold">
        Zarganz / Collection
      </p>
      <h3 className="text-base md:text-xl font-black uppercase tracking-wider text-[#262626]">
        {selectedCategory === "All"
          ? "Our Collection"
          : selectedCategory}
      </h3>
    </div>

    <span className="ml-auto text-2xl font-serif italic text-[#AC0000]">
      01
    </span>
  </motion.div>
</AnimatePresence>

      {/* =============================== */}
      {/* PRODUCT SLIDER */}
      {/* =============================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {filteredProducts.length > 0 ? (
            <FilterProductSlider
              filteredProducts={filteredProducts}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <span className="text-5xl font-serif italic text-gray-200">
                Z.
              </span>

              <h3 className="mt-4 text-sm font-bold uppercase tracking-widest text-[#262626]">
                No Products Found
              </h3>

              <p className="mt-2 text-xs text-gray-400">
                Explore another category to discover more styles.
              </p>

              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-[#AC0000]"
              >
                Explore All Products →
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* =============================== */}
      {/* BOTTOM ACTION */}
      {/* =============================== */}

      <div className="mt-7 flex items-center justify-between border-t border-gray-200 pt-5">

        <p className="hidden sm:block text-[9px] md:text-[10px] uppercase tracking-[2px] text-gray-400">
          Discover your next favourite style.
        </p>

        <Link
          href="/shop"
          className="relative group flex items-center justify-between gap-8 min-w-[175px] bg-[#262626] px-5 py-3 overflow-hidden transition-colors duration-300"
        >
          <span className="absolute inset-0 bg-[#AC0000] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />

          <span className="relative z-10 text-[10px] font-bold uppercase tracking-[2px] text-white">
            View All Products
          </span>

          <ArrowUpRight
            size={16}
            className="relative z-10 text-white transition-transform duration-300 group-hover:rotate-45"
          />
        </Link>

      </div>

    </section>
  );
};

export default FilterProducts;
