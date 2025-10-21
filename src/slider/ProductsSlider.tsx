"use client";
import React, { useRef } from "react";

import { productList } from "@/src/api/productsApi";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../components/products/ProductCard";


// interface productProps {
//   products:TProducts[]
// }

const ProductsSlider = () => {

  const swiperRef = useRef<SwiperClass | null>(null);


  return (
    <div className="relative">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          700: { slidesPerView: 2.3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
      >
        {productList?.map((product) => (
          <SwiperSlide key={product.id} className="">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;