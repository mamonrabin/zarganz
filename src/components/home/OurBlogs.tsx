"use client";



import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BlogCard from '@/src/utilits/BlogCard';
import { blogList } from '@/src/api/blogApi';






const OurBlogs = () => {
    return (
        <div className="Container mt-10">
           <h2
       
        className="text-center uppercase md:text-xl text-lg font-semibold tracking-widest"
      >
        Explore Our Latest Blogs
      </h2>
            
          

            <div className="mt-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={false}
          navigation={false}
          autoplay={false}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {blogList?.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        </div>
    );
};

export default OurBlogs;