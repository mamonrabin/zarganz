
"use client";

import React, { useState } from "react";
import { cartList as initialCartList } from "@/src/api/cartApi";
import { FilePenLine, ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CheckoutProducts = () => {
  const [cartItems, setCartItems] = useState(initialCartList);

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Demo prices
  const subTotal = 4580;
  const shipping = 70;
  const discount = 120;
  const totalCost = subTotal + shipping - discount;

  return (
    <div className="sticky top-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3.5">
        <div>
          <h2 className="text-sm font-semibold text-[#262626]">
            Order Summary
          </h2>
          <p className="mt-0.5 text-[11px] text-gray-400">
            {cartItems.length} items in your bag
          </p>
        </div>

        <Link
          href="/cart"
          className="flex items-center gap-1.5 text-xs font-medium text-[#AC0000] transition hover:gap-2"
        >
          <FilePenLine size={14} />
          Edit cart
        </Link>
      </div>

      {/* Products */}
      <div className="max-h-[340px] space-y-3 overflow-y-auto p-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="relative h-[76px] w-[62px] shrink-0 overflow-hidden rounded-md bg-[#F7F6F4]">
                <Image
                  src={item.thumbelImage}
                  alt={item.title}
                  fill
                  sizes="62px"
                  className="object-cover"
                />
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#262626] px-1 text-[10px] text-white">
                  {item.quantity}
                </span>
              </div>

              <div className="flex min-w-0 flex-1 justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-xs font-medium leading-5 text-[#262626]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-gray-400">
                    Size: {item.size || "2XL"}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#AC0000]">
                    TK. {item.price} × {item.quantity}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  aria-label={`Remove ${item.title}`}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-gray-400 transition hover:bg-red-50 hover:text-[#AC0000]"
                >
                  <Trash size={14} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center">
            <ShoppingBag className="mx-auto mb-2 text-gray-300" size={26} />
            <p className="text-sm font-medium text-gray-600">
              Your bag is empty
            </p>
            <Link
              href="/shop"
              className="mt-2 inline-block text-xs font-medium text-[#AC0000] hover:underline"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </div>

      {/* Price Details */}
      <div className="border-t border-dashed border-gray-200 bg-[#FAFAF9] px-4 py-4">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Price Details
        </h3>

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between text-gray-500">
            <span>Subtotal</span>
            <span className="font-medium text-[#262626]">
              TK. {subTotal.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-gray-500">
            <span>Shipping</span>
            <span className="font-medium text-[#262626]">
              TK. {shipping}
            </span>
          </div>

          <div className="flex justify-between text-gray-500">
            <span>Discount</span>
            <span className="font-medium text-green-600">
              - TK. {discount}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3">
          <span className="text-sm font-semibold text-[#262626]">
            Total Amount
          </span>
          <span className="text-lg font-bold text-[#AC0000]">
            TK. {totalCost.toLocaleString()}
          </span>
        </div>

        <p className="mt-2 text-[10px] text-gray-400">
          Shipping and discounts are included in the total.
        </p>
      </div>
    </div>
  );
};

export default CheckoutProducts;
