/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import thumbelImage from "@/src/assets/product/tshirt.jpg";
import thumbe01 from "@/src/assets/product/tshirt2.jpg";
import thumbe02 from "@/src/assets/product/tshirt10.jpg";
import thumbe03 from "@/src/assets/product/tshirt11.jpg";
import thumbe04 from "@/src/assets/product/tshirt12.jpg";

const images = [thumbe01, thumbe02, thumbe03, thumbe04];

const ImageGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lensPos, setLensPos] = useState<{ x: number; y: number } | null>(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const allImages = [thumbelImage, ...images];
  const zoomLevel = 2.5;
  const lensSize = 150;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const container = imgRefs.current[index];
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const safeX = Math.max(lensSize / 2, Math.min(x, rect.width - lensSize / 2));
    const safeY = Math.max(lensSize / 2, Math.min(y, rect.height - lensSize / 2));

    setLensPos({ x: safeX, y: safeY });
    setImgSize({ width: rect.width, height: rect.height });
  };

  const handleMouseLeave = () => setLensPos(null);

  return (
    <div className="w-full  flex flex-col items-center">
      {/* Constrain gallery width and center */}
      <div className="max-w-[350px] md:max-w-[700px] sm:max-w-[500px] w-full mx-auto">
        {/* Main Swiper */}
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, Thumbs]}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="!w-full"
          >
            {allImages?.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => { imgRefs.current[index] = el; }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={handleMouseLeave}
                  className="relative border border-primary/20 overflow-hidden cursor-crosshair"
                >
                  <Image
                    src={img}
                    alt={`img ${index}`}
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />

                  {/* Circular Zoom Lens */}
                  {lensPos && activeIndex === index && (
                    <div
                      className="absolute pointer-events-none rounded-full border-2 border-gray-300 shadow-lg"
                      style={{
                        width: `${lensSize}px`,
                        height: `${lensSize}px`,
                        left: lensPos.x - lensSize / 2,
                        top: lensPos.y - lensSize / 2,
                        backgroundImage: `url(${img.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: `${imgSize.width * zoomLevel}px ${imgSize.height * zoomLevel}px`,
                        backgroundPosition: `${
                          -(lensPos.x * zoomLevel - lensSize / 2)
                        }px ${-(lensPos.y * zoomLevel - lensSize / 2)}px`,
                        transition: "background-position 0.05s ease-out",
                      }}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail Swiper */}
        <div className="overflow-hidden mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
            }}
            className="!w-full"
          >
            {allImages?.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                  width={100}
                  height={100}
                  className={`rounded w-full h-full object-contain border ${
                    activeIndex === index
                      ? "border-primary"
                      : "border-primary/20"
                  } cursor-pointer`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
