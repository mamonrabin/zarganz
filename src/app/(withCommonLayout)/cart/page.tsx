
"use client";

import { useState } from "react";
import { cartList as initialCartList } from "@/src/api/cartApi";
import Navbar from "@/src/components/header/Navbar";
import { ArrowRight, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [cartList, setCartList] = useState(initialCartList);

  const handleRemove = (id: number) => {
    setCartList((prev) => prev.filter((cart) => cart.id !== id));
  };

  const totalAmount = cartList.reduce(
    (total, item) => total + item.Subtotal,
    0
  );

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-[#FAFAF9] z-50 w-full"
        titleStyle="text-[#262626]"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30 scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
      />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6">
        {/* Heading */}
        <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-5">
          <div>
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#AC0000]">
              ZARGANZ / COLLECTION
            </p>
            <h1 className="font-serif text-3xl text-[#262626]">
              Shopping Bag
            </h1>
          </div>

          <span className="text-xs text-gray-500">
            {cartList.length} Items
          </span>
        </div>

        {cartList.length > 0 ? (
          <div className="grid gap-7 lg:grid-cols-[1fr_310px]">
            {/* Cart Products */}
            <section>
              <div className="hidden grid-cols-12 border-b border-gray-200 pb-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:grid">
                <span className="col-span-6">Product</span>
                <span className="col-span-2">Price</span>
                <span className="col-span-2">Qty</span>
                <span className="col-span-2 text-right">Subtotal</span>
              </div>

              {cartList.map((cart) => (
                <div
                  key={cart.id}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-gray-200 py-4 sm:grid-cols-12"
                >
                  <div className="flex min-w-0 items-center gap-3 sm:col-span-6">
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-md bg-[#F0EEEA]">
                      <Image
                        src={cart.thumbelImage}
                        alt={cart.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-xs font-semibold text-[#262626] sm:text-sm">
                        {cart.title}
                      </h3>
                      <p className="mt-1 text-[10px] text-gray-500">
                        Size: {cart.size || "N/A"}
                      </p>
                      <button
                        onClick={() => handleRemove(cart.id)}
                        className="mt-2 flex items-center gap-1 text-[10px] text-gray-400 transition hover:text-[#AC0000]"
                      >
                        <Trash2 size={12} />
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="hidden text-xs text-gray-600 sm:col-span-2 sm:block">
                    ৳ {cart.price.toLocaleString()}
                  </div>

                  <div className="hidden text-xs text-gray-600 sm:col-span-2 sm:block">
                    {cart.quantity}
                  </div>

                  <div className="text-right sm:col-span-2">
                    <p className="text-xs font-semibold text-[#262626]">
                      ৳ {cart.Subtotal.toLocaleString()}
                    </p>
                    <p className="mt-1 text-[10px] text-gray-400 sm:hidden">
                      Qty: {cart.quantity}
                    </p>
                  </div>
                </div>
              ))}

              <Link
                href="/shop"
                className="mt-5 inline-block text-[11px] font-medium text-gray-500 transition hover:text-[#AC0000]"
              >
                ← Continue Shopping
              </Link>
            </section>

            {/* Compact Summary */}
            <aside className="h-fit rounded-lg border border-gray-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-[#262626]">
                  Order Summary
                </h2>
                <ShoppingBag size={17} className="text-[#AC0000]" />
              </div>

              <div className="space-y-3 border-b border-gray-100 pb-4 text-xs">
                <div className="flex justify-between text-gray-500">
                  <span>Products</span>
                  <span>{cartList.length}</span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>৳ {totalAmount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span>At checkout</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-4">
                <span className="text-xs font-semibold">Total</span>
                <span className="text-lg font-bold text-[#AC0000]">
                  ৳ {totalAmount.toLocaleString()}
                </span>
              </div>

              <Link
                href="/checkout"
                className="flex h-10 items-center justify-between rounded bg-[#AC0000] px-4 text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#850000]"
              >
                Checkout
                <ArrowRight size={15} />
              </Link>

              <p className="mt-3 text-center text-[9px] text-gray-400">
                Secure checkout · ZARGANZ
              </p>
            </aside>
          </div>
        ) : (
          <div className="py-14 text-center">
            <ShoppingBag
              size={30}
              className="mx-auto text-gray-400"
              strokeWidth={1.3}
            />
            <h2 className="mt-4 font-serif text-2xl text-[#262626]">
              Your bag is empty
            </h2>
            <Link
              href="/shop"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded bg-[#AC0000] px-5 text-xs font-medium text-white hover:bg-[#850000]"
            >
              Continue Shopping <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
