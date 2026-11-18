
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, Tag } from "lucide-react";
import QuickView from "./QuickView";

interface productProps {
  product: any;
  titleColor?: string;
  priceColor?: string;
  priceSize?: string;
  cardImg?: string;
}

const ProductCard: React.FC<productProps> = ({
  product,
  titleColor,
  priceColor,
  priceSize,
  cardImg,
}) => {
  const {
    title,
    price,
    mrpPrice,
    thumbelImage,
    discount,
    id,
    label,
  } = product;

  return (
    <div className="group relative overflow-hidden cursor-pointer bg-white border border-gray-100 hover:border-[#AC0000]/30 transition-all duration-500">

      {/* Product Image */}
      <div className="relative">
        <Link href={`/product/${id}`}>
          <div className={`relative overflow-hidden w-full ${cardImg}`}>

            {/* First image - KEEP ORIGINAL ANIMATION */}
            <Image
              src={thumbelImage}
              alt={title}
              width={300}
              height={300}
              className="w-full h-full overflow-hidden transform translate-x-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100"
            />

            {/* Second image - KEEP ORIGINAL ANIMATION */}
            <Image
              src={thumbelImage}
              alt={title}
              width={300}
              height={300}
              className="absolute overflow-hidden inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:-translate-x-1/2 group-hover:opacity-0"
            />

            {/* Discount Badge */}
            {discount && (
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-[#AC0000] text-white px-2.5 py-1">
                <Tag size={11} />
                <span className="text-[9px] md:text-[10px] font-bold tracking-wide">
                  SAVE TK {discount}
                </span>
              </div>
            )}

            {/* Label Badge */}
            {label && (
              <div
                className={`absolute top-3 right-3 z-10 px-2.5 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-wider ${
                  label === "box packaging"
                    ? "bg-[#CDFFCD] text-[#262626]"
                    : label === "new arrival"
                    ? "bg-white text-[#262626]"
                    : "bg-[#262626] text-white"
                }`}
              >
                {label}
              </div>
            )}

            {/* Small Hover Indicator */}
            <div className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#262626] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <ArrowUpRight size={15} />
            </div>
          </div>
        </Link>

        {/* Quick View */}
        <div className="absolute bottom-0 left-0 w-full opacity-0 translate-y-3 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
          <QuickView />
        </div>
      </div>

      {/* Product Content */}
      <div className="relative p-3 md:p-4 flex flex-col items-center text-center space-y-1.5">

        {/* Product Title */}
        <Link href={`/product/${id}`} className="w-full">
          <h2
            className={`font-semibold text-[11px] sm:text-xs md:text-sm uppercase tracking-wide text-[#262626] line-clamp-1 transition-colors duration-300 group-hover:text-[#AC0000] ${titleColor || ""}`}
          >
            {title}
          </h2>
        </Link>

        {/* Price */}
        <div className={`flex items-center justify-center gap-2 ${priceSize || "text-xs md:text-sm"}`}>
          <p className={`font-bold text-[#262626] ${priceColor || ""}`}>
            TK. {price}.00
          </p>

          {mrpPrice && (
            <p className="text-gray-400 line-through text-[10px] md:text-xs">
              TK. {mrpPrice}.00
            </p>
          )}
        </div>

        {/* Bottom Accent */}
        <div className="h-[2px] w-0 bg-[#AC0000] transition-all duration-500 group-hover:w-8" />
      </div>
    </div>
  );
};

export default ProductCard;
