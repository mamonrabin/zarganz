"use client";


import React, { useState } from "react";
import { cartList as initialCartList } from "@/src/api/cartApi";
import { FilePenLine, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CheckoutProducts = () => {
  // State to hold cart items dynamically
  const [cartItems, setCartItems] = useState(initialCartList);

  // Function to remove an item from the cart
  const handleRemove = (id: number) => {
    const updatedList = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedList);
  };

  // Example static prices for demo
  const subTotal = 4580;
  const shipping = 70;
  const discount = 120;
  const totalCost = subTotal + shipping - discount;

  return (
    <div className="border border-primary/20 rounded p-4 lg:mt-10 sticky lg:top-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-primary">Cart Overview</h2>
        <Link href="/cart">
          <p className="flex items-center gap-1 font-medium text-sm cursor-pointer hover:text-primary duration-300">
            <FilePenLine size={16} />
            <span>Modify cart</span>
          </p>
        </Link>
      </div>

      {/* Cart Items */}
      <div className="mt-4 flex flex-col gap-2 border-b border-primary/20 pb-4">
        {cartItems.length > 0 ? (
          cartItems.map((cat) => (
            <div key={cat.id} className="flex justify-between items-start">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-[100px] h-[80px] border rounded overflow-hidden">
                  <Image
                    src={cat.thumbelImage}
                    alt={cat.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <p className="text-sm font-medium line-clamp-1">
                    {cat?.title}
                  </p>
                  <p className="text-sm capitalize">
                    <span>size: </span> <span>{cat.size || "2XL"}</span>
                  </p>
                  <p className="text-sm font-medium text-primary capitalize">
                    <span>price: </span>{" "}
                    <span>{cat.price} × {cat.quantity}</span>
                  </p>
                </div>
              </div>

              {/* Remove Button */}
              <div
                onClick={() => handleRemove(cat.id)}
                className="w-[25px] h-[25px] border border-primary/20 rounded text-primary hover:bg-red-500 hover:text-white duration-300 cursor-pointer flex items-center justify-center"
              >
                <Trash size={16} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-gray-500 py-4">
            Your cart is empty.
          </p>
        )}
      </div>

      {/* Price Summary */}
      <div className="flex flex-col gap-1 py-2 border-b border-primary/20">
        <p className="flex items-center justify-between font-medium">
          <span className="text-sm">SubTotal :</span>
          <span className="text-base text-primary">TK. {subTotal}</span>
        </p>
        <p className="flex items-center justify-between font-medium">
          <span className="text-sm">Shipping (+):</span>
          <span className="text-base text-primary">TK. {shipping}</span>
        </p>
        <p className="flex items-center justify-between font-medium">
          <span className="text-sm">Discount (-):</span>
          <span className="text-base text-primary">TK. {discount}</span>
        </p>
      </div>

      {/* Total */}
      <div className="mt-2">
        <p className="flex items-center justify-between font-medium">
          <span>Total Cost:</span>
          <span className="text-lg text-primary">TK. {totalCost}</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutProducts;
