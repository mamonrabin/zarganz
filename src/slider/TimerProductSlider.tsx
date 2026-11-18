
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronRight } from "lucide-react";

import "swiper/css";

import { productList } from "@/src/api/productsApi";
import ProductCardTwo from "../components/products/ProductCardTwo";

const TimerProductSlider = () => {
  return (
    <div className="group/slider relative w-full min-w-0">

      {/* Left Fade */}
      <div className="pointer-events-none absolute -left-1 top-0 z-10 h-full rounded-2xl w-8 bg-gradient-to-r from-[#750d1a80] to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute -right-1 top-0 z-10 h-full rounded w-10 bg-gradient-to-l from-[#7f000096] to-transparent" />

      <Swiper
        slidesPerView={1.35}
        spaceBetween={12}
        loop={productList.length > 4}
        speed={800}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 14,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3.2,
            spaceBetween: 15,
          },
          1536: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
        }}
        className="!overflow-hidden !px-1 !py-2"
      >
        {productList.map((product) => (
          <SwiperSlide key={product.id} className="h-auto">
            <ProductCardTwo
              product={product}
              cardImg="h-[165px] sm:h-[185px] lg:h-[190px]"
              titleColor="text-[#202820]"
              priceColor="text-[#005438]"
              priceSize="text-sm"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Hint */}
      <div className="pointer-events-none absolute right-2 top-1/2 z-20 flex -translate-y-1/2 items-center gap-1 rounded-full border border-white/30 bg-white/95 px-2.5 py-2 text-[#005438] shadow-lg">
        <span className="text-[9px] font-extrabold uppercase tracking-wider">
          Swipe
        </span>
        <ChevronRight size={15} className="animate-pulse" />
      </div>

    </div>
  );
};

export default TimerProductSlider;
