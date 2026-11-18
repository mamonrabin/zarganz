
"use client";

import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BsSuitDiamondFill,
} from "react-icons/bs";
import {
  Truck,
  RotateCcw,
  Ruler,
  PackageCheck,
} from "lucide-react";

import sizeImage from "@/src/assets/size/size.webp";

const ProductAccordion = () => {
  return (
    <div className="w-full border-t border-gray-200">
      <Accordion type="single" collapsible className="w-full">

        {/* Description */}
        <AccordionItem value="description" className="border-b border-gray-200">
          <AccordionTrigger className="py-5 text-sm font-semibold uppercase tracking-[2px] text-[#262626] hover:no-underline [&>svg]:text-gray-500">
            <span className="flex items-center gap-3">
              <PackageCheck size={17} strokeWidth={1.6} />
              Description
            </span>
          </AccordionTrigger>

          <AccordionContent>
            <div className="space-y-3 pb-4 text-sm leading-7 text-gray-500">
              <p>
                The Mini Scalp Topper is the perfect solution for covering
                small bald spots and achieving a natural, realistic look.
                Designed with a 2 × 3-inch silk base, this topper offers
                an undetectable finish that blends seamlessly with your
                natural hair.
              </p>

              <p>
                Made from 100% human hair, it is lightweight, comfortable,
                and easy to wear all day long with just two clips. The
                Natural Black/Brown color ensures it integrates beautifully
                with most hair shades.
              </p>

              <p>
                Enjoy a lightweight, comfortable, and natural-looking
                solution designed for everyday confidence.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Size Guide */}
        <AccordionItem value="size-guide" className="border-b border-gray-200">
          <AccordionTrigger className="py-5 text-sm font-semibold uppercase tracking-[2px] text-[#262626] hover:no-underline [&>svg]:text-gray-500">
            <span className="flex items-center gap-3">
              <Ruler size={17} strokeWidth={1.6} />
              Size Guide
            </span>
          </AccordionTrigger>

          <AccordionContent>
            <div className="pb-4">
              <p className="mb-4 text-sm leading-6 text-gray-500">
                Please check our size guide before placing your order to
                find your perfect fit.
              </p>

              <div className="overflow-hidden rounded-sm border border-gray-100 bg-gray-50 p-2">
                <Image
                  src={sizeImage}
                  alt="Product size guide"
                  width={700}
                  height={700}
                  className="mx-auto h-auto max-h-[450px] w-full object-contain"
                  sizes="(max-width: 640px) 90vw, 600px"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Shipping & Return */}
        <AccordionItem value="shipping-return" className="border-b border-gray-200">
          <AccordionTrigger className="py-5 text-sm font-semibold uppercase tracking-[2px] text-[#262626] hover:no-underline [&>svg]:text-gray-500">
            <span className="flex items-center gap-3">
              <Truck size={17} strokeWidth={1.6} />
              Shipping & Return Policy
            </span>
          </AccordionTrigger>

          <AccordionContent>
            <div className="space-y-6 pb-4">

              {/* Shipping */}
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#262626]">
                  <BsSuitDiamondFill className="text-[#AC0000]" size={11} />
                  Shipping Information
                </div>

                <div className="ml-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3 text-sm">
                    <span className="text-gray-500">Inside Dhaka</span>
                    <span className="font-semibold text-[#262626]">
                      ৳80.00
                      <span className="ml-2 text-xs font-normal text-gray-400">
                        (2 Days)
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="text-gray-500">Outside Dhaka</span>
                    <span className="font-semibold text-[#262626]">
                      ৳150.00
                      <span className="ml-2 text-xs font-normal text-gray-400">
                        (3–5 Days)
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Return */}
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#262626]">
                  <BsSuitDiamondFill className="text-[#AC0000]" size={11} />
                  Return Policy
                </div>

                <div className="ml-5 rounded-sm bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <RotateCcw
                      size={17}
                      className="mt-0.5 shrink-0 text-[#AC0000]"
                    />
                    <p className="text-sm leading-6 text-gray-500">
                      Returns are accepted for defective products only.
                      Please check your parcel in front of the delivery
                      agent before accepting it.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default ProductAccordion;
