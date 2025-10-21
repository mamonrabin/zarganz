"use client";
import React, { useRef } from "react";


import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../components/products/ProductCard";







const TimerProductSlider = ({products}) => {
 
  const swiperRef = useRef<SwiperClass | null>(null);


  return (
    <div className="relative lg:mt-20 mt-8 lg:ml-6 lg:mx-0 mx-4">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          700: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3.3 },
          1280: { slidesPerView: 3.3 },
          1536: { slidesPerView: 3.3 },
        }}
        modules={[Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="">
            <ProductCard product={product} cardImg="h-[180px]" titleColor="text-white text-[12px]" priceSize="text-[12px]" priceColor="text-white" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimerProductSlider;