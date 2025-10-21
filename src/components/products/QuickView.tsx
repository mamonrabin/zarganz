import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import QuickImageGallery from "./QuickImageGallery";
import AddBtn from "@/src/utilits/AddBtn";
import { colorList } from "@/src/api/colorApi";

const QuickView = () => {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger className="text-[12px] font-medium uppercase py-2 text-white cursor-pointer flex items-center justify-center w-full bg-[#AC0000]">
          Quick View
        </DialogTrigger>
        <DialogContent className="lg:max-w-5xl sm:max-w-xl w-full max-h-[90vh] !rounded-none p-0 overflow-y-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            {/* LEFT: Product Gallery */}
            <div className="w-full">
              <QuickImageGallery />
            </div>

            {/* RIGHT: Product Info */}
            <div className="p-4">
              <h2 className="text-xl sm:text-2xl uppercase font-semibold">
                Zara Women Leather Bag
              </h2>

              <div className="mt-3 flex flex-wrap items-center gap-2 font-medium text-lg border-b pb-2">
                <p>TK.1200.00</p>
                <p className="text-red-500 line-through text-base">
                  TK.1250.00
                </p>
              </div>

              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                <span className="font-medium">Product Code:</span> ZARGANZ2045
              </p>

              <p className="mt-2 text-sm sm:text-base">
                <span className="font-medium">Availability:</span>{" "}
                <span className="text-green-600 font-semibold">In Stock</span>
              </p>

              <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                Model is 59 wearing Size XS. A subtle, complex, and easy-to-use
                template for modern eCommerce styling with a sleek design and
                user-friendly layout.
              </p>

              {/* Color Options */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
                {colorList &&
                  colorList.map((clr: string, i: number) => (
                    <p
                      key={i}
                      className="px-3 py-2 text-center border hover:border-primary font-medium uppercase text-xs sm:text-sm text-gray-600 hover:text-primary transition-all duration-300 cursor-pointer"
                    >
                      {clr.toUpperCase()}
                    </p>
                  ))}
              </div>

              {/* Add to Cart */}
              <div className="mt-5">
                <AddBtn
                  counterBtn={true}
                  addcartBtn={true}
                  counterStyle="py-1.5"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuickView;
