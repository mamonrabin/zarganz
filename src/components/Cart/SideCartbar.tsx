
"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import {
  ArrowRight,
  ShoppingBag,
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

import { cartList as initialCartList } from "@/src/api/cartApi";

const SideCartbar = () => {
  const [cartList, setCartList] = useState(
    initialCartList.map((item) => ({ ...item, quantity: 1 }))
  );

  const handleRemove = (id: string | number) => {
    setCartList((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string | number, amount: number) => {
    setCartList((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const totalPrice = cartList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartList.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Sheet>
      {/* Trigger */}
      <SheetTrigger asChild>
        <button
          aria-label="Open shopping bag"
          className="group cursor-pointer relative flex h-10 w-10 items-center justify-center transition-all duration-300 hover:text-[#AC0000]"
        >
          <RiShoppingBagLine
            size={22}
            className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
          />

          <span className="absolute -right-0.5 -top-0.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#AC0000] px-1 text-[9px] font-bold text-white">
            {totalItems}
          </span>
        </button>
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 border-none bg-white p-0 sm:max-w-[460px]"
      >
        {/* Dark Header */}
       <SheetHeader className="border-b border-gray-100 bg-[#1C1C1C] px-5 py-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/50">
        Zarganz Collection
      </p>

      <SheetTitle className="mt-1 font-serif text-xl font-medium tracking-wide text-white">
        Shopping Bag
        <span className="ml-2 font-sans text-xs font-normal text-white/50">
          ({totalItems})
        </span>
      </SheetTitle>
    </div>

    <SheetClose asChild>
      <button className="flex cursor-pointer h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-[#1C1C1C]">
        <X size={16} />
      </button>
    </SheetClose>
  </div>
</SheetHeader>

        {/* Products */}
        <div className="flex-1 overflow-y-auto bg-[#F8F8F8] px-5 py-6">
          {cartList.length > 0 ? (
            <div className="space-y-4">
              {cartList.map((cart) => (
                <div
                  key={cart.id}
                  className="group relative flex gap-4 bg-white p-3 transition-all duration-300 hover:shadow-md"
                >
                  {/* Image */}
                  <Link
                    href="/cart"
                    className="relative h-[125px] w-[105px] shrink-0 overflow-hidden bg-[#F3F3F3]"
                  >
                    <Image
                      src={cart.thumbelImage}
                      alt={cart.title}
                      fill
                      sizes="105px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="line-clamp-2 text-[11px] font-bold uppercase leading-5 tracking-wider text-[#262626]">
                          {cart.title}
                        </h3>

                        <button
                          onClick={() => handleRemove(cart.id)}
                          aria-label={`Remove ${cart.title}`}
                          className="shrink-0 text-gray-300 transition-colors duration-300 hover:text-[#AC0000]"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <p className="mt-2 text-[10px] uppercase tracking-wider text-gray-400">
                        {cart.color} / {cart.size}
                      </p>

                      <p className="mt-2 text-sm font-bold text-[#AC0000]">
                        TK {(cart.price * cart.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 items-center border border-gray-200">
                        <button
                          onClick={() => updateQuantity(cart.id, -1)}
                          aria-label="Decrease quantity"
                          className="flex h-full w-8 items-center justify-center text-gray-500 transition-colors hover:bg-[#AC0000] hover:text-white"
                        >
                          <Minus size={12} />
                        </button>

                        <span className="w-8 text-center text-xs font-semibold">
                          {cart.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(cart.id, 1)}
                          aria-label="Increase quantity"
                          className="flex h-full w-8 items-center justify-center text-gray-500 transition-colors hover:bg-[#AC0000] hover:text-white"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="text-[9px] font-medium uppercase tracking-wider text-gray-400">
                        Qty: {cart.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full min-h-[350px] flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#AC0000] shadow-sm">
                <ShoppingBag size={30} strokeWidth={1.3} />
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#262626]">
                Nothing here yet.
              </h3>

              <p className="mt-2 max-w-[230px] text-xs leading-6 text-gray-400">
                Your next favorite look is waiting to be discovered.
              </p>

              <SheetClose asChild>
                <Link
                  href="/shop"
                  className="mt-6 bg-[#AC0000] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#262626]"
                >
                  Start Shopping
                </Link>
              </SheetClose>
            </div>
          )}
        </div>

        {/* Bottom Checkout */}
        {cartList.length > 0 && (
         <SheetFooter className="mt-auto block border-t border-gray-100 bg-white px-5 py-4">
  <div className="mb-3 flex items-center justify-between">
    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
      Subtotal
    </span>

    <span className="font-serif text-xl font-semibold text-[#1C1C1C]">
      ৳{totalPrice.toLocaleString()}
    </span>
  </div>

  <Link
    href="/checkout"
    className="group flex h-11 w-full items-center justify-between rounded-lg bg-[#AC0000] px-5 text-white transition-all duration-300 hover:bg-[#850000]"
  >
    <span className="text-xs font-semibold uppercase tracking-[0.15em]">
      Proceed to Checkout
    </span>

    <ArrowRight
      size={17}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>

  <Link
    href="/cart"
    className="mt-3 block text-center text-[11px] font-medium text-gray-500 transition hover:text-[#AC0000]"
  >
    View Shopping Bag
  </Link>
</SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SideCartbar;
