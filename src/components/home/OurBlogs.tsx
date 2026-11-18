
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BlogCard from "@/src/utilits/BlogCard";
import { blogList } from "@/src/api/blogApi";

const OurBlogs = () => {
  return (
    <section className="Container my-12 md:my-16 overflow-hidden">

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
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#AC0000]" />

              <span className="text-[9px] md:text-[10px] font-bold tracking-[3px] uppercase text-[#AC0000]">
                Stories & Inspiration
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-[-1px] text-[#262626] leading-none">
              Explore{" "}
              <span className="font-serif italic font-normal text-[#AC0000]">
                Our Blogs.
              </span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="hidden sm:flex items-center gap-2 pb-1">
            <BookOpen size={15} className="text-[#AC0000]" />

            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              Latest Stories
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

      {/* Blog Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={false}
          navigation={false}
          autoplay={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {blogList?.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Bottom Action Row */}
      <div className="mt-7 md:mt-9 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-5">

        <p className="text-[9px] md:text-[10px] uppercase tracking-[2px] text-gray-400 text-center sm:text-left">
          Discover fresh ideas, fashion stories & inspiration.
        </p>

        <Link
          href="/blog"
          className="relative group flex items-center justify-between gap-8 min-w-[175px] bg-[#262626] px-5 py-3 overflow-hidden transition-colors duration-300"
        >
          <span className="absolute inset-0 bg-[#AC0000] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />

          <span className="relative z-10 text-[10px] font-bold uppercase tracking-[2px] text-white">
            Explore All
          </span>

          <ArrowUpRight
            size={16}
            className="relative z-10 text-white transition-transform duration-300 group-hover:rotate-45"
          />
        </Link>
      </div>

    </section>
  );
};

export default OurBlogs;
