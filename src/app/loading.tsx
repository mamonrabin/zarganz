
"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center">

        {/* Animated Logo */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[3px] border-[#AC0000]/10" />

          <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#AC0000] border-r-[#AC0000]" />

          <span className="text-2xl font-serif font-bold tracking-tighter text-[#AC0000]">
            Z
          </span>
        </div>

        {/* Brand Name */}
        <h2 className="mt-6 text-lg font-serif font-semibold tracking-[0.25em] text-[#262626]">
          ZARGANZ
        </h2>

        <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.3em] text-gray-400">
          Preparing your experience
        </p>

        {/* Loading Progress Animation */}
        <div className="mt-6 h-[2px] w-32 overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] bg-[#AC0000]" />
        </div>

        <style jsx>{`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(200%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loading;
