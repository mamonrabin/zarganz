
"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import { useWindowSize } from "../utilits/useWindowSize";
import { categoryList } from "../api/categoryApi";

const CategorySlider = () => {
  const windowWidth = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);

  const showCustomArrows =
    (windowWidth >= 1024 && categoryList.length > 4) ||
    (windowWidth < 1024 && categoryList.length > 3);

  return (
    <div className="relative rounded mt-4 h-[320px] w-[970px] border border-[#AC0000]/20 bg-white p-8 shadow-sm xl:h-[310px] xl:w-[1100px] 2xl:w-[1100px]">
      {/* Top Heading */}
      <div className="absolute left-8 top-3 z-10 flex items-center gap-2">
        <span className="h-5 w-[3px] rounded-full bg-[#AC0000]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
          Explore Categories
        </span>
      </div>

      {/* Custom Arrows */}
      {showCustomArrows && (
        <>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous categories"
            className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:border-[#AC0000] hover:bg-[#AC0000] hover:text-white"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next categories"
            className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:border-[#AC0000] hover:bg-[#AC0000] hover:text-white"
          >
            <ChevronRight size={19} />
          </button>
        </>
      )}

      {/* Category Slider */}
      <Swiper
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 6 },
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
        className="!pb-2 !pt-2"
      >
        {categoryList.map((category) => (
          <SwiperSlide key={category.id}>
            <Link href="/shop" className="group block px-1">
              <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-2 transition-all duration-500 hover:-translate-y-1 hover:border-[#AC0000] hover:shadow-lg">
                {/* Image */}
                <div className="relative h-[180px] w-full overflow-hidden rounded-lg bg-gray-50">
                  <Image
                    src={category.image}
                    alt={category.category}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                  {/* Explore Icon */}
                  <div className="absolute bottom-2 right-2 flex h-8 w-8 translate-y-3 items-center justify-center rounded-full bg-[#AC0000] text-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRight size={15} />
                  </div>
                </div>

                {/* Category Name */}
                <div className="px-1 pb-1 pt-3 text-center">
                  <h3 className="truncate text-[12px] font-bold uppercase tracking-[0.12em] text-gray-800 transition-colors duration-300 group-hover:text-primary">
                    {category.category}
                  </h3>

                  <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-gray-400">
                    Explore Collection
                  </p>

                  <div className="mx-auto mt-2 h-[2px] w-0 bg-[#AC0000] transition-all duration-500 group-hover:w-10" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;