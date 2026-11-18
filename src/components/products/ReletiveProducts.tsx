
"use client";

import React from "react";
import ProductsSlider from "@/src/slider/ProductsSlider";

import { motion } from "framer-motion";


const ReletiveProducts = () => {
  return (
    <section className="mt-20">

      {/* Creative Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-7 md:mb-9"
      >
        <div className="flex items-end justify-between gap-3">

          {/* Left Heading */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#AC0000]" />
              <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#AC0000] md:text-[10px]">
                Selected For You
              </span>
            </div>

            <h2 className="text-2xl font-black uppercase leading-none tracking-[-1px] text-[#262626] sm:text-3xl md:text-5xl">
              You May{" "}
              <span className="font-serif font-normal italic text-[#AC0000]">
                Also Like.
              </span>
            </h2>
          </div>

          {/* Right Label */}
          <div className="hidden items-center gap-2 pb-1 sm:flex">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              More to explore
            </span>
            <span className="text-2xl font-light text-gray-300 md:text-3xl">
              02<span className="text-[#AC0000]">/</span>04
            </span>
          </div>
        </div>

        {/* Decorative Line */}
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

      {/* Products Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <ProductsSlider />
      </motion.div>

    
    </section>
  );
};

export default ReletiveProducts;
