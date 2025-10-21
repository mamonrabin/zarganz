

import React from "react";

import flasImage from "@/src/assets/banner/timerBanner.jpg";
import Image from "next/image";



import FlashSaleTimer from "@/src/utilits/FlashSaleTimer";

import TimerProductSlider from "@/src/slider/TimerProductSlider";

const FlashSele = () => {
  return (
    <div className="grid lg:grid-cols-2 my-10">
      <div className="w-full md:h-[380px] h-[300px] relative">
        <Image
          src={flasImage}
          alt="Flash Sale"
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 rounded-b"></div>
        <div className="absolute flex items-center justify-center flex-col gap-4 top-1/2 left-1/2 z-10 transform -translate-y-1/2 -translate-x-1/2">
          <h2 className="md:text-xl uppercase text-white font-semibold">
            SALE ENDING SOON
          </h2>
          <FlashSaleTimer />

          <button className="text-sm font-medium mt-4 cursor-pointer px-4 py-2  border border-white text-white">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="bg-primary overflow-hidden">
        <TimerProductSlider/>
      </div>
    </div>
  );
};

export default FlashSele;
