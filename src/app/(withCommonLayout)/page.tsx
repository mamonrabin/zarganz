import Navbar from '@/src/components/header/Navbar';
// import AboutSection from '@/src/components/home/AboutSection';
import Banner from '@/src/components/home/Banner';
import FilterProducts from '@/src/components/home/FilterProducts';
import FlashSele from '@/src/components/home/FlashSele';
import HotProducts from '@/src/components/home/HotProducts';
import NewArrivals from '@/src/components/home/NewArrivals';
import OurBlogs from '@/src/components/home/OurBlogs';
import ShopByCategory from '@/src/components/home/ShopByCategory';
import TopRatedProducts from '@/src/components/home/TopRatedProducts';
import VideoGallary from '@/src/components/home/VideoGallary';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <HotProducts/>
            <FilterProducts/>
            <ShopByCategory/>
            <NewArrivals/>
            <FlashSele/>
            <VideoGallary/>
            <TopRatedProducts/>
            <OurBlogs/>
            {/* <AboutSection/> */}
        </div>
    );
};

export default page;