"use client";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
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
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const [isCartLoading, setIsCartLoading] = useState(false);

  const handleAddToCart = () => {
    if (isCartLoading) return;
    setIsCartLoading(true);
    setTimeout(() => {
      setIsCartLoading(false);
      toast.success("Added to cart!", {
        duration: 4000,
        position: "top-right",
      });
    }, 1000); // Simulate API delay
  };
  return (
    <div className="">
      <div className={`flex flex-col gap-2 ${counterMainStyle}`}>
        {counterBtn && (
          <div
            className={`flex items-center justify-between border border-[#262629]/40 hover:border-primary/40 duration-300  px-2   w-[30%] ${counterStyle}`}
          >
            <p
              onClick={handleDecrement}
              className="cursor-pointer text-[#262629]/40 hover:text-primary hover:font-semibold duration-300"
            >
              <Minus size={16} />
            </p>
            <span>{count}</span>
            <p
              onClick={handleIncrement}
              className="cursor-pointer text-[#262629]/40 hover:text-primary hover:font-semibold duration-300"
            >
              <Plus size={16} />
            </p>
          </div>
        )}

        {addcartBtn && (
          <div className="flex items-center gap-2 mt-2">
            <div
            onClick={handleAddToCart}
            className="w-full  bg-[#646464] hover:bg-[#AC0000] cursor-pointer duration-300 text-white text-center py-2"
          >
            <button className="text-sm outline-none cursor-pointer uppercase tracking-widest font-medium">
              {isCartLoading ? (
                <span>cart adding...</span>
              ) : (
                <span className="">add to cart</span>
              )}
            </button>
          </div>
            <div
           
            className="w-full bg-primary hover:bg-[#AC0000] cursor-pointer duration-300 text-white text-center py-2"
          >
            <Link href="/checkout">
            <button className="text-sm outline-none cursor-pointer uppercase tracking-widest font-medium">
              Buy Now
            </button>
            </Link>
          </div>

          
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBtn;
