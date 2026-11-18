
"use client";

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollToBottomToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(
        window.scrollY > 300 ||
        document.documentElement.scrollTop > 300
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-[9999] cursor-pointer
        flex h-8 w-8 items-center justify-center
        rounded-lg bg-[#262626] text-white shadow-lg
        transition-all duration-300
        hover:bg-[#AC0000]
        ${
          visible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
    >
      <ArrowUp size={16} strokeWidth={2} />
    </button>
  );
};

export default ScrollToBottomToTop;
