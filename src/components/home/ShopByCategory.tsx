"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { categoryList } from "@/src/api/shopCategoryApi";

const ShopByCategory = () => {
  return (
    <section className="Container overflow-hidden mt-12 md:mt-16">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 md:mb-8"
      >
        <div className="flex items-end justify-between gap-3">
          {/* Left Heading */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#AC0000]" />
              <span className="text-[9px] md:text-[10px] font-bold tracking-[3px] uppercase text-[#AC0000]">
                Explore Our Collection
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-[-1px] text-[#262626] leading-none">
              Shop By{" "}
              <span className="font-serif italic font-normal text-[#AC0000]">
                Category.
              </span>
            </h2>
          </div>

          {/* Right Label */}
          <div className="hidden sm:flex items-center gap-2 pb-1">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              Find Your Style
            </span>
            <span className="text-2xl md:text-3xl font-light text-gray-300">
              01<span className="text-[#AC0000]">/</span>03
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

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {categoryList.slice(0, 3).map((category, i) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: "easeOut",
            }}
          >
            <Link
              href="/shop"
              className="group relative block overflow-hidden bg-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={category.image}
                  alt={category.category}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Label */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[9px] font-semibold tracking-[2px] uppercase text-white/90">
                    ZARGANZ / 0{i + 1}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-[#AC0000] group-hover:border-[#AC0000] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[2px] text-white/65 mb-1.5 transition-transform duration-500 group-hover:-translate-y-1">
                    Explore Collection
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-white">
                      {category.category}
                    </h3>

                    <span className="text-[9px] uppercase tracking-[1.5px] text-white/80 opacity-0 translate-x-[-8px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      Explore
                    </span>
                  </div>

                  {/* Animated Line */}
                  <div className="relative mt-3 h-px w-full bg-white/30 overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-0 bg-[#AC0000] transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom Action */}
      <div className="mt-6 md:mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
        <p className="text-[9px] md:text-[10px] uppercase tracking-[2px] text-gray-400">
          Discover your next favorite style.
        </p>

        <Link
          href="/shop"
          className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#262626] hover:text-[#AC0000] transition-colors"
        >
          View All Categories
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default ShopByCategory;
