"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import { bannerList } from "@/src/api/bannerApi";
// import { TBanners } from "@/types";

// interface BannerProps {
//   banners: TBanners[];
// }

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {bannerList.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className="relative z-10 w-full h-[380px] md:h-[500px] lg:h-[600px] bg-[#F0F0F0] p-8 cursor-pointer overflow-hidden">
            {/* Image with Up → Down animation */}
            <motion.div
              initial={{ scale: 1.2, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={banner.image}
                alt="banner"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Button with Bottom → Top animation */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute flex bottom-[5%] left-1/2 -translate-x-1/2"
            >
              <button className="text-white hover:text-[#AC0000]  underline duration-300 transition-all rounded uppercase text-sm font-medium tracking-widest cursor-pointer">
                {banner.linkTitle}
              </button>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
