
import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

import FlashSaleTimer from "@/src/utilits/FlashSaleTimer";
import TimerProductSlider from "@/src/slider/TimerProductSlider";

const FlashSele = () => {
  return (
    <section className="Container my-12 md:my-16">
      <div className="relative isolate overflow-hidden rounded-[26px] bg-gradient-to-br from-[#650B16] via-[#991B2B] to-[#C8323E] p-4 sm:p-6 lg:rounded-[32px] lg:p-7">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/[0.10] blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-black/[0.12] blur-[90px]" />

        <div className="pointer-events-none absolute right-8 top-8 hidden rotate-12 text-white/[0.05] lg:block">
          <Zap size={150} fill="currentColor" />
        </div>

        <div className="relative z-10">

          {/* Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

            <div className="lg:flex hidden items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#991B2B] shadow-lg shadow-black/10">
                <Zap size={22} fill="currentColor" />
              </div>

              <div>
                <div className="lg:flex hidden items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-white/80">
                    Exclusive Offers
                  </span>
                  <Sparkles size={13} className="text-white" />
                </div>

                <h2 className="mt-0.5 lg:flex hidden text-xl font-black tracking-tight text-white sm:text-2xl">
                  Flash <span className="text-white/65">Sale</span>
                </h2>
              </div>
            </div>

            <Link
              href="/shop"
              className="group lf:flex hidden items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-[#650B16]"
            >
              Explore All
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[230px_minmax(0,1fr)] lg:items-center lg:gap-7">

            {/* Countdown Side */}
            <div className="flex flex-col justify-center rounded-[22px] border border-white/15 bg-white/[0.08] p-4 backdrop-blur-md sm:p-5 lg:h-full">

              <span className="mb-3 w-fit rounded-full bg-[#252525] px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white">
                Limited Time
              </span>

              <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                Deals You
                <br />
                <span className="text-white/65">Can&apos;t Miss!</span>
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Grab your favorite products before the offer ends.
              </p>

              <div className="my-5 h-px bg-white/15" />

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.5px] text-white/80">
                Sale Ends In
              </p>

              <FlashSaleTimer />

              <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                Hurry Up! Limited Stock
              </div>
            </div>

            {/* Product Slider */}
            <div className="min-w-0">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/70">
                    Special Selection
                  </p>

                  <h3 className="mt-1 text-base font-extrabold text-white sm:text-lg">
                    Hot Sale Products
                  </h3>
                </div>

                <Link
                  href="/shop"
                  className="flex items-center gap-1 text-[11px] font-bold text-white/75 transition-colors hover:text-white sm:hidden"
                >
                  View All <ArrowRight size={13} />
                </Link>
              </div>

              <TimerProductSlider />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSele;
