/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";

import { useWindowSize } from "../utilits/useWindowSize";
import { categoryList } from "../api/categoryApi";

const CategorySlider = () => {
  // const [categoryList, setcategoryList] = useState<any[]>([]);
  const windowWidth = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);

  // useEffect(() => {
  //   const fetchcategoryList = async () => {
  //     try {
  //       const data = await getAllcategoryList();
  //       setcategoryList(data);
  //     } catch (error) {
  //       console.error("Failed to fetch categoryList:", error);
  //     }
  //   };
  //   fetchcategoryList();
  // }, []);

  const showCustomArrows =
    (windowWidth >= 1024 && categoryList.length > 4) ||
    (windowWidth < 1024 && categoryList.length > 3);

  return (
    <div className="border border-primary/40 relative mt-4 bg-white 2xl:w-[1100px] xl:w-[1100px] w-[970px] xl:h-[310px] h-[320px] p-8">
      {/* Custom Arrows */}
      {showCustomArrows && (
        <>
          <div className="absolute top-1/2 left-[10px] z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="cursor-pointer text-primary/60"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 right-[10px] z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer text-primary/60"
            >
              <ChevronRight />
            </button>
          </div>
        </>
      )}

      {/* Swiper Slider */}
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
        className="py-4"
      >
        {categoryList.map((category) => (
          <SwiperSlide key={category.id}>
            <Link href="/shop">
              <div className="flex flex-col group gap-1 items-center p-2 text-sm hover:border border-primary hover:scale-95 cursor-pointer duration-500 transition-all">
                {/* Category Image */}
                <div className="w-full h-[180px]">
                  <Image
                    src={category.image}
                    alt={category.category}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Category Title */}
                <span className="font-semibold uppercase tracking-wider text-primary mt-1">
                  {category.category}
                </span>

                {/* Smooth hover effect */}
                <div className="opacity-0 transition-all duration-500 ease-in-out flex items-center gap-1 text-[12px] font-medium text-gray-500 hover:text-black cursor-pointer group-hover:opacity-100">
                  <p>View Collections</p>
                  <ArrowRight size={14} />
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
