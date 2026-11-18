
import React from "react";
import Link from "next/link";

const CopyRight = () => {
  return (
    <div className="bg-[#1C1C1C] border-t border-white/10">
      <div className="Container flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">

        {/* Copyright */}
        <p className="text-center text-[11px] tracking-wide text-white/50 sm:text-left sm:text-xs">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">ZARGANZ</span>.
          All rights reserved.
        </p>

        {/* Developer Credit */}
        <p className="flex items-center gap-1.5 text-[11px] tracking-wide text-white/50 sm:text-xs">
          Designed & Developed by
          <Link
            href="https://titaswebs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white transition-colors duration-300 hover:text-[#AC0000]"
          >
            Titasweb
            <span className="ml-1 inline-block text-[#AC0000]">↗</span>
          </Link>
        </p>

      </div>
    </div>
  );
};

export default CopyRight;
