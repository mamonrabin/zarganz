
"use client";

import React from "react";
import ProductsSlider from "@/src/slider/ProductsSlider";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const TopRatedProducts = () => {
  return (
    <section className="Container my-12 md:my-16 overflow-hidden">

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
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#AC0000]" />

              <span className="text-[9px] md:text-[10px] font-bold tracking-[3px] uppercase text-[#AC0000]">
                Customer Favorites
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-[-1px] text-[#262626] leading-none">
              Top{" "}
              <span className="font-serif italic font-normal text-[#AC0000]">
                Rated.
              </span>
            </h2>
          </div>

          {/* Right Rating */}
          <div className="hidden sm:flex items-center gap-2 pb-1">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={12}
                  className="fill-[#AC0000] text-[#AC0000]"
                />
              ))}
            </div>

            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              Loved by customers
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

      {/* Bottom Action Row */}
      <div className="mt-7 md:mt-9 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-5">

        <p className="text-[9px] md:text-[10px] uppercase tracking-[2px] text-gray-400 text-center sm:text-left">
          Handpicked favorites, rated by our customers.
        </p>

        <Link
          href="/shop"
          className="relative group flex items-center justify-between gap-8 min-w-[175px] bg-[#262626] px-5 py-3 overflow-hidden transition-colors duration-300"
        >
          <span className="absolute inset-0 bg-[#AC0000] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />

          <span className="relative z-10 text-[10px] font-bold uppercase tracking-[2px] text-white">
            Explore All
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

export default TopRatedProducts;
