
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import thumbelImage from "@/src/assets/product/tshirt.jpg";
import thumbe01 from "@/src/assets/product/tshirt10.jpg";
import thumbe02 from "@/src/assets/product/tshirt12.jpg";
import thumbe03 from "@/src/assets/product/tshirt13.jpg";
import thumbe04 from "@/src/assets/product/tshirt14.jpg";

const images = [
  thumbelImage,
  thumbe01,
  thumbe02,
  thumbe03,
  thumbe04,
];

const QuickImageGallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full overflow-hidden bg-[#f8f8f8]"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={700}
        className="quick-gallery-swiper w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden">
              <Image
                src={image}
                alt={`Product image ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .quick-gallery-swiper {
          padding-bottom: 35px;
        }

        .quick-gallery-swiper .swiper-pagination {
          bottom: 8px !important;
        }

        .quick-gallery-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          opacity: 1;
          background: #d1d1d1;
          transition: all 0.3s ease;
        }

        .quick-gallery-swiper .swiper-pagination-bullet-active {
          width: 22px;
          border-radius: 20px;
          background: #ac0000;
        }
      `}</style>
    </motion.div>
  );
};

export default QuickImageGallery;
