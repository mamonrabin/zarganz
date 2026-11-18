
import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Navbar from "@/src/components/header/Navbar";
import ImageGallery from "@/src/components/products/ImageGallery";
import ProductAccordion from "@/src/components/products/ProductAccordion";
import ProductColors from "@/src/components/products/ProductColors";
import RecientViewProducts from "@/src/components/products/RecientViewProducts";
import ReletiveProducts from "@/src/components/products/ReletiveProducts";
import AddBtn from "@/src/utilits/AddBtn";
import MessengerBtn from "@/src/utilits/MessengerBtn";

const Page = async () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-white z-50 w-full"
        titleStyle="text-[#262626]"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30 scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
      />

      <div className="Container mt-20 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
          <Link href="/" className="transition hover:text-[#AC0000]">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/category"
            className="transition hover:text-[#AC0000]"
          >
            Category
          </Link>
          <ChevronRight size={14} />
          <span className="font-medium text-[#262626]">
            Zara Women Leather Bag
          </span>
        </nav>

        {/* Product Details */}
        <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery */}
          <div className="min-w-0">
            <div className="lg:sticky lg:top-24">
              <ImageGallery />
            </div>
          </div>

          {/* Product Information */}
          <div className="min-w-0">
            <div className="lg:sticky lg:top-24">
              {/* Brand and Stock */}
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[3px] text-[#AC0000]">
                  Zarganz Collection
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
                  <CheckCircle2 size={14} />
                  In Stock
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-semibold uppercase leading-snug tracking-wide text-[#262626] sm:text-3xl">
                Zara Women Leather Bag
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Product Code: ZARGANZ2045
              </p>

              {/* Price */}
              <div className="mt-5 flex flex-wrap items-center gap-3 border-b border-gray-100 pb-5">
                <span className="text-2xl font-semibold text-[#262626] sm:text-3xl">
                  TK. 1,200.00
                </span>
                <span className="text-base text-gray-400 line-through">
                  TK. 1,250.00
                </span>
                <span className="rounded-sm bg-red-50 px-2.5 py-1 text-xs font-semibold text-[#AC0000]">
                  4% OFF
                </span>
              </div>

              {/* Description */}
              <div className="mt-5">
                <p className="text-sm leading-7 text-gray-500 sm:text-base">
                  Model is 59 wearing Size XS. A subtle, complex, and
                  easy-to-use design for modern everyday styling. Discover
                  timeless elegance with a sleek look and comfortable feel.
                </p>
              </div>

              {/* Colors */}
              <div className="mt-6">
                <ProductColors />
              </div>

              {/* Cart Actions */}
              <div className="mt-7">
                <AddBtn
                  counterBtn={true}
                  addcartBtn={true}
                  counterStyle="py-1.5"
                />
              </div>

              {/* Delivery / Quality Information */}
              <div className="mt-7 grid grid-cols-2 gap-3 border-y border-gray-100 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50">
                    <Truck size={19} className="text-[#AC0000]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#262626] sm:text-sm">
                      Fast Delivery
                    </p>
                    <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">
                      Across Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50">
                    <ShieldCheck size={19} className="text-[#AC0000]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#262626] sm:text-sm">
                      Quality Assured
                    </p>
                    <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">
                      Premium Products
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Accordion */}
              <div className="mt-5">
                <ProductAccordion />
              </div>

              {/* Messenger */}
              <div className="mt-5">
                <MessengerBtn />
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="">
          <ReletiveProducts />
        </section>

        {/* Recently Viewed */}
        {/* <section className="mt-12 border-t border-gray-100 pt-10 sm:mt-16 sm:pt-14">
          <RecientViewProducts />
        </section> */}
      </div>
    </main>
  );
};

export default Page;
