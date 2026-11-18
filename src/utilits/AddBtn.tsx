
"use client";

import React, { useState } from "react";
import { Minus, Plus, ShoppingBag, LoaderCircle, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

interface AddBtnProps {
  counterBtn?: boolean;
  addcartBtn?: boolean;
  counterStyle?: string;
  counterMainStyle?: string;
}

const AddBtn: React.FC<AddBtnProps> = ({
  counterBtn,
  addcartBtn,
  counterStyle,
  counterMainStyle,
}) => {
  const [count, setCount] = useState(1);
  const [isCartLoading, setIsCartLoading] = useState(false);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (isCartLoading) return;

    setIsCartLoading(true);

    setTimeout(() => {
      setIsCartLoading(false);
      toast.success(`${count} item${count > 1 ? "s" : ""} added to cart!`, {
        duration: 3000,
        position: "top-right",
      });
    }, 1000);
  };

  return (
    <div className="w-full">
      <div className={`flex flex-col gap-4 ${counterMainStyle || ""}`}>
        {/* Quantity */}
        {counterBtn && (
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#262626]">
              Quantity
            </span>

            <div
              className={`flex w-[125px] items-center justify-between rounded-sm border border-gray-200 bg-white px-2 ${counterStyle || ""}`}
            >
              <motion.button
                whileTap={{ scale: 0.85 }}
                type="button"
                onClick={handleDecrement}
                disabled={count <= 1}
                aria-label="Decrease quantity"
                className="flex h-7 w-7 items-center justify-center text-gray-500 transition-colors hover:text-[#AC0000] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <Minus size={14} />
              </motion.button>

              <motion.span
                key={count}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-bold text-[#262626]"
              >
                {count}
              </motion.span>

              <motion.button
                whileTap={{ scale: 0.85 }}
                type="button"
                onClick={handleIncrement}
                aria-label="Increase quantity"
                className="flex h-7 w-7 items-center justify-center text-gray-500 transition-colors hover:text-[#AC0000]"
              >
                <Plus size={14} />
              </motion.button>
            </div>
          </div>
        )}

        {/* Cart Buttons */}
        {addcartBtn && (
          <div className="grid grid-cols-2 gap-2">
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={handleAddToCart}
              disabled={isCartLoading}
              className="group flex items-center justify-center gap-2 bg-[#262626] px-3 py-3 text-white transition-all duration-300 hover:bg-[#AC0000] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isCartLoading ? (
                <LoaderCircle size={15} className="animate-spin" />
              ) : (
                <ShoppingBag
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              )}

              <span className="text-[9px] font-bold uppercase tracking-[1.2px] sm:text-[10px]">
                {isCartLoading ? "Adding..." : "Add to Cart"}
              </span>
            </motion.button>

            <motion.div whileTap={{ scale: 0.97 }}>
              <Link
                href="/checkout"
                className="group flex h-full items-center justify-center gap-2 bg-[#AC0000] px-3 py-3 text-white transition-all duration-300 hover:bg-[#262626]"
              >
                <Zap
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-[9px] font-bold uppercase tracking-[1.2px] sm:text-[10px]">
                  Buy Now
                </span>
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBtn;
