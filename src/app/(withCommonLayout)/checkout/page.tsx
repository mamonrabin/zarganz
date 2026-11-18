
"use client";

import CheckoutProducts from "@/src/components/checkout/CheckoutProducts";
import Navbar from "@/src/components/header/Navbar";
import CheckoutForm from "@/src/form/CheckoutForm";
import { ChevronDown, ShieldCheck, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-[#FAFAF9] z-50 w-full"
        titleStyle="text-[#262626]"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30 scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
      />

      <main className="Container mx-auto max-w-6xl px-4 pb-12 pt-28 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-7 border-b border-gray-200 pb-5">
          <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#AC0000]">
            ZARGANZ / Secure Shopping
          </p>

          <h1 className="font-serif text-3xl font-medium text-[#262626] sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-xs text-gray-500">
            Complete your details to place your order.
          </p>
        </div>

        {/* Mobile Order Summary */}
        <div className="mb-5 overflow-hidden rounded-lg border border-gray-200 bg-white lg:hidden">
          <button
            type="button"
            onClick={() => setShowSummary((prev) => !prev)}
            aria-expanded={showSummary}
            className="flex w-full items-center justify-between px-4 py-3.5 text-left"
          >
            <span className="flex items-center gap-2 text-xs font-medium text-[#AC0000]">
              <ShoppingBag size={16} />
              Order summary
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  showSummary ? "rotate-180" : ""
                }`}
              />
            </span>

            <span className="text-sm font-semibold text-[#262626]">
              TK. 1250
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ${
              showSummary
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-gray-100 p-4">
                <CheckoutProducts />
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Layout */}
        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Checkout Form */}
          <section className="min-w-0 rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
            <div className="mb-5 border-b border-gray-100 pb-4">
              <h2 className="text-base font-semibold text-[#262626]">
                Your Information
              </h2>
              <p className="mt-1 text-[11px] text-gray-400">
                Please provide your delivery details.
              </p>
            </div>

            <CheckoutForm />
          </section>

          {/* Desktop Order Summary */}
          <aside className="hidden min-w-0 rounded-lg border border-gray-200 bg-white p-5 lg:sticky lg:top-24 lg:block">
            <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-base font-semibold text-[#262626]">
                  Order Summary
                </h2>
                <p className="mt-1 text-[10px] text-gray-400">
                  Review your selected products
                </p>
              </div>

              <ShoppingBag size={19} className="text-[#AC0000]" />
            </div>

            <CheckoutProducts />
          </aside>
        </div>

        {/* Secure Checkout Note */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-gray-400">
          <ShieldCheck size={14} className="text-[#AC0000]" />
          Secure checkout · Your information is protected
        </div>
      </main>
    </div>
  );
};

export default Page;
