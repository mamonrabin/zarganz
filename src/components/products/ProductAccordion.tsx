import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { BsSuitDiamondFill } from "react-icons/bs";

import sizeImage from "@/src/assets/size/size.webp"
import Image from "next/image";

const ProductAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-medium tracking-widest text-sm cursor-pointer uppercase">
          Description
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-3 text-gray-500">
            <p>
              The Mini Scalp Topper is the perfect solution for covering small
              bald spots and achieving a natural, realistic look. Designed with
              a 2 3-inch silk base, this topper offers an undetectable finish
              that blends seamlessly with your natural hair.
            </p>
            <p>
              Made from 100% human hair, it is lightweight, comfortable, and
              easy to wear all day long with just two clips. The Natural
              Black/Brown color ensures it integrates beautifully with most hair
              shades, offering a natural and effortless appearance.
            </p>
            <p>
              This is one of the most affordable silk base scalp toppers,
              offering high quality at an unbeatable price. Perfect for anyone
              looking for a lightweight, comfortable, and natural hair solution!
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-medium cursor-pointer uppercase">
          SIZE GUIDE
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <Image src={sizeImage} alt="sizeImage" width={300} height={300}/>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-medium cursor-pointer uppercase">
          SHIPPING & RETURN POLICY
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <div>
              <p className="flex items-center gap-2 font-semibold text-[#646464]">
                <span>
                  <BsSuitDiamondFill />
                </span>{" "}
                <span>SHIPPING</span>
              </p>
              <div className="mt-2 ml-6">
                <p className="flex items-center gap-2 text-sm font-medium text-[#646464]">
                  <span>INSIDE DHAKA </span> : <span> 80.00 TK (2 DAYS)</span>
                </p>
                <p className="flex items-center gap-2 text-sm font-medium text-[#646464]">
                  <span>OUTSIDE DHAKA</span> :{" "}
                  <span> 150.00 TK (3-5 DAYS)</span>
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-2 font-semibold text-[#646464]">
                <span>
                  <BsSuitDiamondFill />
                </span>{" "}
                <span>RETURN</span>
              </p>
              <div className="mt-2 ml-6">
                <p className="flex items-center gap-2 text-sm font-medium text-[#646464]">
                  DEFEVTIVE PRODUCTS RETURN ONLY. PLEASE CHECK YOUR PARCEL
                  INFRONT OF THE DELIVERY AGENT.
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductAccordion;
