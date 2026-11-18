"use client";

import React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Truck, X } from "lucide-react";

import QuickImageGallery from "./QuickImageGallery";
import AddBtn from "@/src/utilits/AddBtn";
import ProductColors from "./ProductColors";

const QuickView = () => {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger className="group flex w-full items-center justify-center gap-2 bg-[#AC0000] py-3 text-[10px] font-bold uppercase tracking-[1.8px] text-white transition-all duration-300 hover:bg-[#262626]">
          Quick View
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </DialogTrigger>

        <DialogContent className="w-[95vw] max-w-5xl rounded-[1px] max-h-[92vh] overflow-y-auto overflow-x-hidden  border border-gray-100 bg-white p-0 shadow-2xl">
         
          {/* Custom Close Button */}
          <DialogClose asChild>
            <button
              type="button"
              aria-label="Close quick view"
              className="fixed right-[calc(2.5vw+12px)] top-[calc(4vh+12px)] z-[100] flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#262626] shadow-md transition-all duration-300 hover:rotate-90 hover:bg-[#AC0000] hover:text-white sm:right-[calc((100vw-80rem)/2+20px)]"
            >
              <X size={18} strokeWidth={2} />
            </button>
          </DialogClose>
         
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {/* LEFT: Product Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-fit bg-[#f7f7f7] md:sticky md:top-0 md:self-start"
            >
              <div className="absolute left-4 top-4 z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[1.8px] text-[#262626] shadow-sm backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#AC0000]" />
                  Zarganz Collection
                </span>
              </div>

              <QuickImageGallery />
            </motion.div>

            {/* RIGHT: Product Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col p-5 sm:p-7 md:p-8"
            >
              {/* Product Label */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-[#AC0000]" />
                <span className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#AC0000]">
                  Featured Product
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold uppercase leading-tight tracking-tight text-[#262626] sm:text-2xl">
                Zara Women Leather Bag
              </h2>

              <p className="mt-2 text-[10px] font-medium uppercase tracking-[1.5px] text-gray-400">
                Product Collection / Women
              </p>

              {/* Price */}
              <div className="mt-5 flex flex-wrap items-center gap-3 border-b border-gray-100 pb-5">
                <p className="text-2xl font-bold text-[#AC0000]">TK. 1200.00</p>

                <p className="text-sm text-gray-400 line-through">
                  TK. 1250.00
                </p>

                <span className="rounded-sm bg-[#AC0000]/10 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wide text-[#AC0000]">
                  Special Price
                </span>
              </div>

              {/* Product Details */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <p className="text-xs text-gray-500">
                  SKU:
                  <span className="ml-2 font-semibold text-[#262626]">
                    ZARGANZ2045
                  </span>
                </p>

                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-green-600" />
                  <span className="text-xs font-semibold text-green-600">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-[13px] leading-7 text-gray-500">
                Model is 59 wearing Size XS. A subtle, versatile and easy-to-use
                design for modern everyday styling with a sleek look and
                comfortable fit.
              </p>

              {/* Colors */}
              <div className="mt-6 border-t border-gray-100 pt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold uppercase tracking-[2px] text-[#262626]">
                    Select Color
                  </h3>
                  <span className="text-[10px] uppercase tracking-wide text-gray-400">
                    Choose your style
                  </span>
                </div>

                <ProductColors />
              </div>

              {/* Add to Cart */}
              <div className="mt-6 border-t border-gray-100 pt-5">
                <AddBtn
                  counterBtn={true}
                  addcartBtn={true}
                  counterStyle="py-2"
                  counterMainStyle="gap-3"
                />
              </div>

              {/* Benefits */}
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5">
                <div className="flex items-center gap-2">
                  <Truck size={17} className="text-[#AC0000]" />
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                    Fast Delivery
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-[#AC0000]" />
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                    Quality Assured
                  </span>
                </div>
              </div>

              {/* Footer */}
              <p className="mt-6 text-center text-[9px] font-medium uppercase tracking-[2px] text-gray-400">
                ZARGANZ · Style Made Simple
              </p>
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuickView;
