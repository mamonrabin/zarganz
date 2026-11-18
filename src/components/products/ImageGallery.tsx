
"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Search } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import thumbelImage from "@/src/assets/product/tshirt.jpg";
import thumbe01 from "@/src/assets/product/tshirt2.jpg";
import thumbe02 from "@/src/assets/product/tshirt10.jpg";
import thumbe03 from "@/src/assets/product/tshirt11.jpg";
import thumbe04 from "@/src/assets/product/tshirt12.jpg";

const images = [thumbe01, thumbe02, thumbe03, thumbe04];
const allImages = [thumbelImage, ...images];

const ImageGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lensPos, setLensPos] = useState<{ x: number; y: number } | null>(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const zoomLevel = 2.5;
  const lensSize = 150;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (window.innerWidth < 1024) return;

    const container = imgRefs.current[index];
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const safeX = Math.max(
      lensSize / 2,
      Math.min(x, rect.width - lensSize / 2)
    );

    const safeY = Math.max(
      lensSize / 2,
      Math.min(y, rect.height - lensSize / 2)
    );

    setLensPos({ x: safeX, y: safeY });
    setImgSize({ width: rect.width, height: rect.height });
  };

  const handleMouseLeave = () => setLensPos(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setLensPos(null);
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[650px]">

        {/* Main Image */}
        <div className="group relative overflow-hidden bg-[#f8f8f8]">
          <Swiper
            modules={[Thumbs]}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed
                  ? thumbsSwiper
                  : null,
            }}
            onSlideChange={handleSlideChange}
            className="!w-full"
          >
            {allImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => {
                    imgRefs.current[index] = el;
                  }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={handleMouseLeave}
                  className="relative aspect-square w-full cursor-crosshair overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Zarganz product image ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 650px"
                    className="select-none object-contain p-2 sm:p-4"
                    draggable={false}
                  />

                  {/* Circular Zoom Lens */}
                  {lensPos && activeIndex === index && (
                    <div
                      className="pointer-events-none absolute z-20 hidden rounded-full border-2 border-white shadow-xl lg:block"
                      style={{
                        width: `${lensSize}px`,
                        height: `${lensSize}px`,
                        left: lensPos.x - lensSize / 2,
                        top: lensPos.y - lensSize / 2,
                        backgroundImage: `url(${img.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: `${imgSize.width * zoomLevel}px ${
                          imgSize.height * zoomLevel
                        }px`,
                        backgroundPosition: `${
                          -(lensPos.x * zoomLevel - lensSize / 2)
                        }px ${
                          -(lensPos.y * zoomLevel - lensSize / 2)
                        }px`,
                      }}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-white/90 px-3 py-1.5 text-[10px] font-medium tracking-widest text-[#262626] backdrop-blur-sm">
            <Search size={12} className="text-[#AC0000]" />
            <span>
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-1 text-gray-300">/</span>
              {String(allImages.length).padStart(2, "0")}
            </span>
          </div>

          {/* Zoom Hint */}
          <div className="absolute left-4 top-4 z-10 hidden items-center gap-2 bg-white/90 px-3 py-2 text-[9px] uppercase tracking-widest text-gray-500 backdrop-blur-sm lg:flex">
            <Search size={13} />
            Hover to zoom
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            breakpoints={{
              480: { slidesPerView: 4 },
              640: { slidesPerView: 5 },
            }}
            className="!w-full"
          >
            {allImages.map((img, index) => (
              <SwiperSlide key={index}>
                <button
                  type="button"
                  onClick={() => {
                    // Thumbnail selection is handled by Swiper Thumbs.
                    setActiveIndex(index);
                    setLensPos(null);
                  }}
                  aria-label={`View product image ${index + 1}`}
                  className={`relative aspect-square w-full overflow-hidden border bg-[#f8f8f8] transition-all duration-300 ${
                    activeIndex === index
                      ? "border-[#AC0000] opacity-100"
                      : "border-transparent opacity-60 hover:border-gray-300 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Product thumbnail ${index + 1}`}
                    fill
                    sizes="120px"
                    className="object-contain p-1"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
