/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  const { title, price, mrpPrice, thumbelImage, discount, id, label } = product;

  return (
    <div className="group overflow-hidden cursor-pointer border border-primary/10 hover:border-primary/15 transition-all duration-500">
      <div className="relative">
        <Link href={`/product/${id}`}>
        <div className={`relative overflow-hidden w-full ${cardImg}`}>
          {/* First image (hidden by default, appears on hover) */}
          <Image
            src={thumbelImage}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full overflow-hidden transform translate-x-1/2  opacity-0  transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 "
          />

          {/* Second image (visible by default, hides on hover) */}
          <Image
            src={thumbelImage}
            alt={title}
            width={300}
            height={300}
            className="absolute overflow-hidden inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:-translate-x-1/2  group-hover:opacity-0"
          />

         

          {/* Discount Badge */}
          {discount && (
            <p className="px-2 py-1 bg-[#AC0000] absolute top-4 right-0  text-white md:text-[12px] text-[10px] font-medium">
              SAVE TK {discount}.00
            </p>
          )}

          {/* Label Badge */}
          {label && (
            <p
              className={`px-2 py-1 absolute top-4 right-0 md:text-[12px] text-[10px] font-medium uppercase ${
                label === "box packaging"
                  ? "bg-[#CDFFCD] text-primary"
                  : label === "new arrival"
                  ? "bg-[#D4D4D4]"
                  : ""
              }`}
            >
              {label}
            </p>
          )}
        </div>
      </Link>

      <div className="w-full group-hover:opacity-100 absolute bottom-0  opacity-0 duration-300 -translate-y-2 group-hover:translate-y-0">
           <QuickView/>
         </div>
      </div>

      

      {/* Product Content */}
      <div className="p-3 flex items-center flex-col space-y-1 transition-all duration-500">
        <h2
          className={`font-medium text-sm uppercase text-primary line-clamp-1 transition-all duration-300 ${titleColor}`}
        >
          {title}
        </h2>
        <div className={`flex items-center gap-2 ${priceSize}`}>
          <p className={`${priceColor}`}>TK.{price}.00</p>
          {mrpPrice && (
            <p className="text-[red] flex items-center line-through">TK.{mrpPrice} <span className="hidden md:block">.00</span></p>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
