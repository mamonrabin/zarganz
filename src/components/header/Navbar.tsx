"use client";

import { ChevronDown, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SideCartbar from "../Cart/SideCartbar";
import { playfairDisplay } from "@/src/app/font";
import CategorySlider from "@/src/slider/CategorySlider";
import ResponsiveNavBar from "./ResponsiveNavBar";
import SearchBar from "@/src/utilits/SerachBar";
// import ResponsiveSidBar from "./ResponsiveNavBar";
import { AnimatePresence, motion } from "framer-motion";


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
      {/* Shop Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
>
  <div
    className={`hidden lg:flex items-center gap-2 cursor-pointer uppercase text-sm tracking-wider transition-colors duration-300 ${titleStyle}`}
  >
    <span>Shop</span>

    <motion.span
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <ChevronDown size={16} />
    </motion.span>
  </div>

  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.96,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          y: 15,
          scale: 0.98,
          filter: "blur(5px)",
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 top-full z-[100] origin-top-left pt-5"
      >
        <CategorySlider />
      </motion.div>
    )}
  </AnimatePresence>

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
