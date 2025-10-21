

import Navbar from "@/src/components/header/Navbar";
import ImageGallery from "@/src/components/products/ImageGallery";
import ProductAccordion from "@/src/components/products/ProductAccordion";
import ProductColors from "@/src/components/products/ProductColors";
import RecientViewProducts from "@/src/components/products/RecientViewProducts";
import ReletiveProducts from "@/src/components/products/ReletiveProducts";
import AddBtn from "@/src/utilits/AddBtn";
import MessengerBtn from "@/src/utilits/MessengerBtn";
import React from "react";



const page = async () => {
//   const product = await getProductById(params.productId);
//   const { thumbelImage,title, description, details, availability, color, code, price, video,images } = product;
  return (
    <div>
      <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-white z-50 w-full"
        titleStyle="text-[#262626]"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30  scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
        // MenuIconStyle2="text-[#262626]"
      />
      <div className="Container py-2 mt-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <ImageGallery />
          </div>
          <div>
            <div className="flex items-center gap-4 text-gray-500 cursor-pointer">
              <p className="hover:text-primary duration-300">Home</p>
              <p>|</p>
              <p className="hover:text-primary duration-300">Category</p>
              <p>|</p>
              <p className="text-primary font-medium">Brand</p>
            </div>

            <div>
              
              <h2 className="text-xl mt-2 sm:text-2xl uppercase font-semibold">
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

             {/* <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
                             {colorList &&
                               colorList.map((clr: string, i: number) => (
                                 <p
                                   key={i}
                                   className="px-3 py-2 text-center border hover:border-primary font-medium uppercase text-xs sm:text-sm text-gray-600 hover:text-primary transition-all duration-300 cursor-pointer"
                                 >
                                   {clr.toUpperCase()}
                                 </p>
                               ))}
                           </div> */}
                           <ProductColors/>
            </div>

            <div className=" mt-4">
              <AddBtn counterBtn={true} addcartBtn={true} counterStyle="py-1.5" />
            </div>

            <div className="mt-6">
              <ProductAccordion  />
            </div>

            <div>
              <MessengerBtn />
            </div>
          </div>
        </div>

        <div>
          <ReletiveProducts />
        </div>

        <div>
          <RecientViewProducts/>
        </div>
      </div>
    </div>
  );
};

export default page;
