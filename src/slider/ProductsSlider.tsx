
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

import { productList } from "@/src/api/productsApi";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../components/products/ProductCard";

const ProductsSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
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
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        speed={800}
      >
        {productList?.map((product, index) => (
          <SwiperSlide key={product.id}>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProductsSlider;
