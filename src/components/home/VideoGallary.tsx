
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { productList } from "@/src/api/productsApi";

const VideoGallary = () => {
  const getVideoUrl = (video: string) => {
    if (!video) return "";

    // YouTube Shorts
    if (video.includes("youtube.com/shorts")) {
      const videoId = video.split("/shorts/")[1]?.split("?")[0];

      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}`;
    }

    // YouTube Watch
    if (video.includes("youtube.com/watch")) {
      const videoId = new URL(video).searchParams.get("v");

      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}`;
    }

    // YouTube Short Link
    if (video.includes("youtu.be/")) {
      const videoId = video.split("youtu.be/")[1]?.split("?")[0];

      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}`;
    }

    // Instagram Reels
    if (video.includes("instagram.com/reel")) {
      const reelId = video.split("/reel/")[1]?.split("/")[0];

      return `https://www.instagram.com/reel/${reelId}/embed`;
    }

    return video;
  };

  return (
    <section className="Container my-12 overflow-hidden md:my-16">

      {/* Creative Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-7 md:mb-9"
      >
        <div className="flex items-end justify-between gap-3">

          {/* Left Heading */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#AC0000]" />
              <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#AC0000] md:text-[10px]">
                Behind The Style
              </span>
            </div>

            <h2 className="text-2xl font-black uppercase leading-none tracking-[-1px] text-[#262626] sm:text-3xl md:text-5xl">
              Watch{" "}
              <span className="font-serif font-normal italic text-[#AC0000]">
                & Discover.
              </span>
            </h2>
          </div>

          {/* Right Number */}
          <div className="hidden items-center gap-2 pb-1 sm:flex">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              Featured videos
            </span>
            <span className="text-2xl font-light text-gray-300 md:text-3xl">
              01<span className="text-[#AC0000]">/</span>05
            </span>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="relative mt-5 h-px bg-gray-200">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "75px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-0 h-[2px] bg-[#AC0000]"
          />
        </div>
      </motion.div>

      {/* Video Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          slidesPerView={1.3}
          spaceBetween={12}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.8, spaceBetween: 14 },
            700: { slidesPerView: 2.3, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 18 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 22 },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
        >
          {productList?.filter((product) => product.video).slice(0, 5).map((product) => {
            const videoUrl = getVideoUrl(product.video);

            return (
              <SwiperSlide key={product.id}>
                <div className="group relative isolate h-[370px] overflow-hidden rounded-[20px] border border-gray-200 bg-[#262626] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:h-[400px]">

                  {/* Video */}
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={videoUrl}
                    title={product.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />

                  {/* Bottom Gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-black/95 via-black/65 to-transparent" />

                  {/* Play Icon Decoration */}
                  <div className="pointer-events-none absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md">
                    <Play size={14} fill="currentColor" />
                  </div>

                  {/* Product Details */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-4">

                    <Link
                      href={`/product/${product.id}`}
                      className="flex items-center gap-3"
                    >
                      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/50 bg-white">
                        <Image
                          src={product.thumbelImage}
                          alt={product.title}
                          width={50}
                          height={50}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="min-w-0 flex-1 text-white">
                        <h3 className="line-clamp-1 text-[11px] font-bold uppercase tracking-wide">
                          {product.title}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-white/75">
                          TK. {product.price}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                      href={`/product/${product.id}`}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 py-2.5 text-[10px] font-bold uppercase tracking-[1.5px] text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-[#AC0000]"
                    >
                      View Product
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default VideoGallary;
