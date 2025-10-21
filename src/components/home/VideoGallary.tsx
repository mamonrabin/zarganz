"use client";


import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { productList } from '@/src/api/productsApi';
import Link from 'next/link';




const VideoGallary = () => {
  const ref = useRef(null);
  

  return (
    <div className="Container" ref={ref}>
      
      <h2
        
        className="text-center md:text-xl text-lg font-semibold tracking-widest"
      >
        ZARGANZ FEATURED
      </h2>

      {/* Slider Animation */}
      <div
        
        className="py-4"
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
          modules={[ Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
          
        >
          {productList?.slice(0, 5).map((product) => {
            let videoUrl = "";

            // YouTube Shorts
            if (product.video.includes("youtube.com/shorts")) {
              const videoId = product.video.split("/shorts/")[1]?.split("?")[0];
              videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}`;
            }
            // YouTube normal watch link
            else if (product.video.includes("youtube.com/watch")) {
              const videoId = new URL(product.video).searchParams.get("v");
              videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}`;
            }
            // YouTube short share link (youtu.be)
            else if (product.video.includes("youtu.be/")) {
              const videoId = product.video.split("youtu.be/")[1]?.split("?")[0];
              videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}`;
            }
            // Instagram Reels
            else if (product.video.includes("instagram.com/reel")) {
              const reelId = product.video.split("/reel/")[1]?.split("/")[0];
              videoUrl = `https://www.instagram.com/reel/${reelId}/embed`;
            }
            // Fallback
            else {
              videoUrl = product.video;
            }

            return (
              <SwiperSlide key={product.id}>
                <div className="relative rounded w-full h-[400px] aspect-video cursor-pointer">
                  <iframe
                    className="w-full h-full rounded"
                    src={videoUrl}
                    title={product.title}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>

                  <div className='absolute bottom-0 left-0 right-0'>
                    <div className='flex items-center gap-2 p-4'>
                      <Link href={`/product/${product.id}`}>
                      <div className='w-[40px] h-[40px]'>
                        <Image
                          src={product.thumbelImage}
                          alt={product.title}
                          width={50}
                          height={50}
                          className='w-full h-full border-2 border-white'
                        />
                      </div>
                      </Link>
                      <div className='text-white flex-1'>
                        <Link href={`/product/${product.id}`}>
                        <h2 className='line-clamp-1 text-[12px] font-semibold uppercase'>
                          {product.title}
                        </h2>
                        </Link>
                        <h2 className='text-[12px] font-medium'>
                          TK.{product.price}
                        </h2>
                      </div>
                    </div>
                     <Link href={`/product/${product.id}`}>
                    <div className='cursor-pointer w-full rounded-b border-t border-white/40 bg-primary hover:bg-[#AC0000] duration-300 text-white text-center py-2 text-sm font-semibold'>
                      <button className='cursor-pointer'>View Product</button>
                      
                    </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoGallary;
