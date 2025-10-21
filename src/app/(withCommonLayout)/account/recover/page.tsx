import Navbar from '@/src/components/header/Navbar';
import Link from 'next/link';
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
        // MenuIconStyle2="text-[#262626]"
      />

      <div className='Container py-40'>
         <div className='flex items-center justify-center flex-col gap-2'>
            <h2 className='text-2xl uppercase font-bold'>Reset your password</h2>
            <p className='text-gray-600'>We will send you an email to reset your password</p>
         </div>

         <div className='xl:px-80 lg:px-60 md:px-40 mt-8'>
            <form className='flex flex-col gap-4'>
                <input 
                className='px-4 py-2.5 border border-[#262626]/30 outline-none'
                type="email" placeholder='Email Address' />
                <input 
                className='hover:bg-[#AC0000] bg-[#262626] cursor-pointer duration-300 px-4 py-2.5 uppercase text-white font-semibold'
                type="submit" value="submit" />

                <div className='flex items-center justify-center flex-col'>
                    <Link href="/account/login" className='text-sm text-gray-500 underline hover:text-[#AC0000] duration-300 cursor-pointer'>Cancel</Link>
                </div>
            </form>
         </div>
      </div>
        </div>
    );
};

export default page;