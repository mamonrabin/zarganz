
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, Tag } from "lucide-react";
import QuickView from "./QuickView";

interface ProductProps {
  product: any;
  titleColor?: string;
  priceColor?: string;
  priceSize?: string;
  cardImg?: string;
}

const ProductCardTwo: React.FC<ProductProps> = ({
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
    <div className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white p-2.5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-3">

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-[15px] bg-[#F4F5F3]">
        <Link href={`/product/${id}`} className="block">
          <div className={`relative w-full overflow-hidden ${cardImg || "h-[190px]"}`}>
            <Image
              src={thumbelImage}
              alt={title}
              width={400}
              height={400}
              sizes="(max-width: 640px) 65vw, (max-width: 1024px) 35vw, 220px"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Discount Badge */}
        {discount && (
          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-[#AC0000] px-2.5 py-1.5 text-[#fff] shadow-sm">
            <Tag size={10} />
            <span className="text-[9px] font-extrabold uppercase">
              Save TK {discount}
            </span>
          </div>
        )}

        {/* Product Label */}
        {label && (
          <span className="absolute bottom-2 left-2 rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wider text-[#005438] backdrop-blur-md">
            {label}
          </span>
        )}

        {/* Quick View */}
        <Link
          href={`/product/${id}`}
          aria-label={`View ${title}`}
          className="absolute bottom-2 right-2 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#005438] opacity-0 shadow-lg transition-all duration-300 hover:bg-[#FBC51B] group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight size={17} />
        </Link>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col pt-3">

        <Link href={`/product/${id}`}>
          <h2
            className={`line-clamp-1 text-left text-xs font-bold tracking-tight text-[#202820] transition-colors duration-300 group-hover:text-[#AC0000] sm:text-sm ${titleColor || ""}`}
          >
            {title}
          </h2>
        </Link>

        {/* Price */}
        <div className={`mt-2 flex flex-wrap items-center gap-2 ${priceSize || "text-xs"}`}>
          <span className={`font-extrabold text-[#262626] ${priceColor || ""}`}>
            TK. {price}.00
          </span>

          {mrpPrice && (
            <span className="text-[10px] font-medium text-gray-400 line-through">
              TK. {mrpPrice}.00
            </span>
          )}
        </div>

        {/* Bottom Action */}
        {/* <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
            Limited Offer
          </span> */}

          <div className="mt-4">
            <QuickView />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ProductCardTwo;
