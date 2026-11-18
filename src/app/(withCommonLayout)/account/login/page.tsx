

import Link from "next/link";
import React from "react";

import { ArrowLeft } from "lucide-react";
import Login from "@/src/components/account/Login";

const page = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-white z-50 w-full"
        titleStyle="text-[#262626]"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30 scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
      /> */}

      <div>
        <Link
          href="/"
          aria-label="Back to home"
          className="group fixed left-6 top-6 z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-[#262626] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#AC0000] hover:bg-[#AC0000] hover:text-white hover:shadow-lg"
        >
          <ArrowLeft
            size={19}
            strokeWidth={1.6}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </Link>
      </div>
      <Login />
    </div>
  );
};

export default page;
