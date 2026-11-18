
"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const MessengerBtn = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="fixed bottom-16 cursor-pointer right-5 z-50 flex flex-col items-center gap-3">

      {/* Popup Options */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          showOptions
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-5 scale-75 opacity-0"
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/8801746770324"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp size={23} />

          <span className="absolute right-14 whitespace-nowrap rounded-md bg-[#262626] px-3 py-2 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
            WhatsApp
          </span>
        </a>

        {/* Messenger */}
        <a
          href="https://m.me/107585752267101"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on Messenger"
          className="group relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#087AFF] text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-110"
        >
          <FaFacebookMessenger size={23} />

          <span className="absolute right-14 whitespace-nowrap rounded-md bg-[#262626] px-3 py-2 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
            Messenger
          </span>
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        aria-label={showOptions ? "Close contact options" : "Open contact options"}
        aria-expanded={showOptions}
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#AC0000] text-white shadow-xl shadow-red-950/30 transition-all duration-300 hover:scale-105 hover:bg-[#8D0000]"
      >
        {!showOptions && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#AC0000]/30" />
        )}

        <span className="relative">
          {showOptions ? (
            <X size={18} />
          ) : (
            <MessageCircle size={18} />
          )}
        </span>
      </button>
    </div>
  );
};

export default MessengerBtn;
