"use client";

import { ChevronDown, ChevronUp, Search, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SideCartbar from "../Cart/SideCartbar";
import { playfairDisplay } from "@/src/app/font";
import CategorySlider from "@/src/slider/CategorySlider";
import ResponsiveNavBar from "./ResponsiveNavBar";
import SearchBar from "@/src/utilits/SerachBar";
// import ResponsiveSidBar from "./ResponsiveNavBar";



interface navProps {
  whiteNav?: boolean;
  tranlateBg?: string;
  navMainStyle?: string;
  titleStyle?: string;
  iconStyle?: string;
  logoStyle?: string;
  logoText?: string;
  logoText2?: string;
  link?: string;
  MenuIconStyle2?: string;
}

const Navbar: React.FC<navProps> = ({
  tranlateBg = "",
  navMainStyle = "",
  titleStyle = "",
  iconStyle = "",
  logoStyle = "",
  logoText = "",
  logoText2 = "",
  MenuIconStyle2 = "",
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`Container py-6 flex items-center justify-between absolute top-0 z-50 w-full transition-all duration-500 ${navMainStyle} ${
        isSticky
          ? "bg-white fixed text-black shadow-sm"
          : `bg-transparent text-white ${tranlateBg}`
      }`}
    >
      {/* Left Menu */}
      <div className="relative">
        {/* Shop Dropdown Trigger */}
        <div
          className={`lg:flex hidden items-center gap-1 transition uppercase text-sm cursor-pointer ${titleStyle}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <p className="cursor-pointer">Shop</p>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform duration-300" />
          )}
        </div>

       
        <div
          className={`absolute left-0 top-4 z-50  transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "translate-y-0 visible" : " hidden -translate-y-5"
          }`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <CategorySlider />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden block">
          <ResponsiveNavBar MenuIconStyle={`${MenuIconStyle2}`} />
        </div>
      </div>

      {/* Logo */}
      <div
        className={`absolute transform -translate-x-1/2 transition-all duration-700 ease-in-out ${
          logoStyle
            ? logoStyle
            : isSticky
            ? "top-4 scale-75 left-1/2"
            : "top-20 scale-105 left-1/2 ml-2 lg:ml-18"
        }`}
      >
        <h2
          className={`${
            playfairDisplay.className
          } transition-all duration-700 ${
            isSticky
              ? `md:text-4xl text-3xl tracking-[4px] font-semibold ${logoText2}`
              : `lg:text-8xl text-4xl font-semibold tracking-[26px] ${logoText}`
          }`}
        >
          <Link href="/">ZARGANZ</Link>
        </h2>
      </div>

      {/* Right Icons */}
      <div className={`flex items-center gap-3 ${iconStyle}`}>
        <Link href="/account/login">
        <User size={18} className="hidden lg:block" />
        </Link>
        <SearchBar/>
        {/* <Search size={18} /> */}
        <SideCartbar />
      </div>
    </section>
  );
};

export default Navbar;
