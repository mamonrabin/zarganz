"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { BsSuitDiamondFill } from "react-icons/bs";
import { X } from "lucide-react";
import { cartList as initialCartList } from "@/src/api/cartApi";
import AddBtn from "@/src/utilits/AddBtn";

const SideCartbar = () => {
  const [cartList, setCartList] = useState(initialCartList);

  // 🗑️ Handle remove item
  const handleRemove = (id: string | number) => {
    const updatedList = cartList.filter((item) => item.id !== id);
    setCartList(updatedList);
  };

  // 💰 Calculate total
  const totalPrice = cartList.reduce((sum, item) => sum + item.price, 0);

  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <div className="flex items-center justify-center relative">
          <RiShoppingBagLine size={20} />
          <span className="rounded-full w-[15px] h-[15px] text-[10px] leading-3.5 text-white text-center bg-[#AC0000] absolute top-[-4px] left-3">
            {cartList.length}
          </span>
        </div>
      </SheetTrigger>

      <SheetContent>
        <div className="relative">
          <div className="py-4 border-b flex flex-col px-4 gap-1">
            <p className="text-base font-medium text-primary">
              {cartList.length} items in cart
            </p>
          </div>

          <div className="p-4 flex flex-col gap-3">
            {cartList.length > 0 ? (
              cartList.map((cart) => (
                <div
                  key={cart.id}
                  className="flex gap-3 border-b pb-3 items-start"
                >
                  <div className="w-[100px] h-[100px] border border-[#262626]/20">
                    <Image
                      src={cart.thumbelImage}
                      alt={cart.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-sm md:font-semibold font-medium uppercase line-clamp-1">
                      {cart.title}
                    </h2>
                    <p className="text-sm font-medium">TK {cart.price}</p>
                    <p className="text-[12px] font-medium uppercase text-[#646464] mt-1">
                      <span>{cart.color}</span> / <span>{cart.size}</span>
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="w-full">
                        <AddBtn counterBtn={true} counterStyle="w-[50%] py-0.5" />
                      </div>
                      <div
                        onClick={() => handleRemove(cart.id)}
                        className="hover:text-[#AC0000] duration-300 cursor-pointer"
                      >
                        <X size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-gray-500">Cart is empty</p>
            )}
          </div>
        </div>

        <SheetFooter className="py-4">
          {cartList.length > 0 && (
            <>
              <div className="flex items-center">
                <SheetClose asChild>
                  <Link href="/checkout" className="flex-1">
                    <div className="flex items-center justify-between px-6 uppercase font-medium text-sm bg-primary text-white py-2 cursor-pointer">
                      <p>checkout</p>
                      <p>
                        <BsSuitDiamondFill />
                      </p>
                      <p>
                        TK <span>{totalPrice.toFixed(2)}</span>
                      </p>
                    </div>
                  </Link>
                </SheetClose>
              </div>

              <div className="flex items-center">
                <SheetClose asChild>
                  <Link href="/cart" className="flex-1">
                    <div className="text-center">
                      <p className="font-medium text-gray-500 text-lg hover:text-[#AC0000] duration-300 cursor-pointer underline">
                        view cart
                      </p>
                    </div>
                  </Link>
                </SheetClose>
              </div>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideCartbar;
