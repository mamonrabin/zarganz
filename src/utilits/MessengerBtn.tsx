import Link from "next/link";
import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const MessengerBtn = () => {
  return (
    <div className="border border-[#646464] rounded mt-5 md:px-4 md:py-4 px-2 py-4">
      <div className="flex items-center flex-col">
        <p className="uppercase text-primary"><span className="font-semibold tracking-wider md:text-sm text-[10px]">OUT OF STOCK ?</span> <span className="font-medium tracking-wider md:text-sm text-[10px]">YOU CAN PLACE A PRE-ORDER NOW</span></p>
        <p className="text-sm">Message us for pre-order</p>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {/* WhatsApp Button */}
        <a
          // href="https://wa.me/+8801746770324"

          href="https://www.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 border border-primary/50 hover:border-primary duration-300 px-3 py-1.5  text-[12px] font-medium"
        >
          <FaFacebookMessenger className="text-sm" />
          <span className="">Messenger</span>
        </a>

        {/* Messenger Button */}
        <Link
          // to="https://m.me/107585752267101"
          href="https://www.messenger.com/"
          target="_blank"
          rel="noopener noreferrer"
           className="flex items-center gap-1 border border-primary/50 hover:border-primary duration-300 px-3 py-1.5  text-[12px] font-medium"
        >
          <IoLogoWhatsapp className="text-sm" />
          <span>WhatsApp</span>
        </Link>
      </div>
    </div>
  );
};

export default MessengerBtn;