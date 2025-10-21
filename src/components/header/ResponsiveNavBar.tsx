"use client";


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, ChevronUp, Menu, Search } from "lucide-react";
import subImage from "@/src/assets/category/c1.png"
import subImage2 from "@/src/assets/category/c2.png"
import subImage3 from "@/src/assets/category/c3.png"
import subImage4 from "@/src/assets/category/c4.png"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMobile1 } from "react-icons/ci";
import { socialList } from "@/src/api/SocialApi";
import { playfairDisplay } from "@/src/app/font";
type Props = {
  MenuIconStyle?: string;
};

const ResponsiveSidBar = ({ MenuIconStyle }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet>
      <SheetTrigger className="border-transparent outline-none focus:ring-0">
        <Menu className={`text-2xl cursor-pointer ${MenuIconStyle}`} />
      </SheetTrigger>
      <SheetContent className="w-full px-4 py-2" side="left">
         <h2
          className={`${playfairDisplay.className} text-2xl font-bold tracking-widest` }
        >
          <Link href="/">ZARGANZ</Link>
        </h2>

        <div className="mt-2">
           <form className="w-full flex items-center justify-between gap-2 border rounded border-gray-200 hover:border-gray-300 duration-300 py-2 px-2">
            <input className="outline-none text-sm font-medium text-[#9D9D9D]" type="text" placeholder="SEARCH" />
            <button
        type="submit"
        className=""
      >
        <Search size={18} />
      </button>
           </form>

           <div className="mt-4">
              <ul className="flex flex-col gap-3 text-base font-medium uppercase">
                <li className="tracking-wider">Home</li>
                {/* Shop with Submenu */}
        <li className="tracking-wider relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 w-full"
          >
            <span>Shop</span>
            {open ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {/* Submenu */}
          {open && (
            <div className="mt-2 flex flex-col gap-2 text-sm normal-case">
              <div className="flex items-center gap-2">
                  <Image src={subImage} alt="category" width={50} height={50} />
                  <p className="uppercase md:text-xl text-lg font-medium tracking-wider">HANDBAGs</p>
              </div>
              <div className="flex items-center gap-2">
                  <Image src={subImage2} alt="category" width={50} height={50} />
                  <p className="uppercase md:text-xl text-lg font-medium tracking-wider">TOTE BAGS</p>
              </div>
             <div className="flex items-center gap-2">
                  <Image src={subImage3} alt="category" width={50} height={50} />
                  <p className="uppercase md:text-xl text-lg font-medium tracking-wider">SHOES</p>
              </div>
              <div className="flex items-center gap-2">
                  <Image src={subImage4} alt="category" width={50} height={50} />
                  <p className="uppercase md:text-xl text-lg font-medium tracking-wider">PERFUMES</p>
              </div>
            </div>
          )}
        </li>

                <li className="tracking-wider">about us</li>
                <li className="tracking-wider">contact us</li>
                
              </ul>
           </div>
        </div>

       <div className="flex flex-col gap-2 absolute bottom-4 ">
      <div className="flex gap-3">
        {socialList.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-primary/60 hover:text-primary transition duration-300"
          title={social.title}
        >
          {social.icon}
        </a>
      ))}
      </div>

      <div className="flex items-center gap-1 text-sm mt-2">
        <p className="text-base"><CiMobile1  />
</p>
<p className="text-sm tracking-wider">01600057772</p>
      </div>
    </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveSidBar;
