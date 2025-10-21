"use client"
import CheckoutProducts from "@/src/components/checkout/CheckoutProducts";
import Navbar from "@/src/components/header/Navbar";
import CheckoutForm from "@/src/form/CheckoutForm";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  // state for showing/hiding order summary
  const [showSummary, setShowSummary] = useState(false);

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

      <div className="Container grid lg:grid-cols-2 xl:gap-12 gap-8 mt-12">
        {/* Mobile View */}
        <div className="lg:hidden mt-12">
          <div
            className="flex items-center justify-between w-full cursor-pointer"
            onClick={() => setShowSummary(!showSummary)}
          >
            <p className="text-[#AC0000] flex items-center w-full">
              <span>Order summary </span>
              <span
                className={`transition-transform duration-300 ${
                  showSummary ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown size={18} />
              </span>
            </p>
            <p className="font-medium text-base">TK.1250</p>
          </div>

          {/* Toggle checkout products */}
          {showSummary && (
            <div className="mt-4">
              <CheckoutProducts />
            </div>
          )}
        </div>

        {/* Checkout Form */}
        <div  onClick={() => setShowSummary(false)}>
          <CheckoutForm />
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <CheckoutProducts />
        </div>
      </div>
    </div>
  );
};

export default Page;
