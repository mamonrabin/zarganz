"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import thumbelImage from "@/src/assets/product/tshirt.jpg";
import thumbe01 from "@/src/assets/product/tshirt10.jpg";
import thumbe02 from "@/src/assets/product/tshirt12.jpg";
import thumbe03 from "@/src/assets/product/tshirt13.jpg";
import thumbe04 from "@/src/assets/product/tshirt14.jpg";


const images = [thumbe01, thumbe02, thumbe03, thumbe04];

const QuickImageGallery = () => {
  const allImages = [thumbelImage, ...images];

  return (
    <div>
      <div className="md:w-full hidden md:block h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={false}
        autoplay={false}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="overflow-hidden rounded-md"
      >
        {allImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center w-full bg-gray-50 border">
              <Image
                src={img}
                alt={`Product ${index + 1}`}
                width={600}
                height={600}
                className="md:w-full h-auto object-contain"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div>
      <div className="flex md:hidden justify-center items-center w-full bg-gray-50 border">
              <Image
                src={thumbelImage}
                alt="thumbelImage"
                width={600}
                height={600}
                className="md:w-full h-auto object-contain"
                priority
              />
            </div>
    </div>
    </div>
  );
};

export default QuickImageGallery;
