import { blogList } from '@/src/api/blogApi';
import Navbar from '@/src/components/header/Navbar';
import BlogCard from '@/src/utilits/BlogCard';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-white z-50 w-full"
        titleStyle="text-[#262626]"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30  scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
      />

      <div className='Container py-10 mt-10'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-6 gap-3'>
            {blogList?.map((blog) => (
            
              <BlogCard key={blog.id} blog={blog}/>
            
          ))}
        </div>
      </div>
        </div>
    );
};

export default page;