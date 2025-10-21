"use client";
import { useState } from "react";
import { cartList as initialCartList } from "@/src/api/cartApi";
import Navbar from "@/src/components/header/Navbar";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  // 1️⃣ Make cartList stateful
  const [cartList, setCartList] = useState(initialCartList);

  // 2️⃣ Create a handler to remove product by ID
  const handleRemove = (id: number) => {
    const updatedCart = cartList.filter((cart) => cart.id !== id);
    setCartList(updatedCart);
  };

  return (
    <div>
      <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-white z-50 w-full"
        titleStyle="text-[#262626]"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30  scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
      />

      <div className="Container w-full mx-auto xl:px-40 lg:px-15 md:px-20 mt-16">
        {/* Desktop Cart */}
        <div className="hidden lg:block">
          <h2 className="font-medium md:text-2xl text-xl text-center py-8">
            Your Cart
          </h2>

          <div className="grid grid-cols-7 font-medium border-t border-primary/20 py-5">
            <div className="col-span-2">Product</div>
            <div>Unit Price</div>
            <div>Size</div>
            <div>Quantity</div>
            <div>Subtotal</div>
            <div>Action</div>
          </div>

          <div>
            {cartList.length > 0 ? (
              cartList.map((cart) => (
                <div
                  key={cart.id}
                  className="grid grid-cols-7 items-center border-t border-primary/20 py-3"
                >
                  <div className="col-span-2 flex xl:flex-row items-start gap-3">
                    <div className="w-[60px] h-[50px]">
                      <Image
                        src={cart.thumbelImage}
                        alt=""
                        width={120}
                        height={120}
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-sm text-primary line-clamp-2">
                      {cart?.title}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <p className="lg:ml-3">TK. {cart?.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-lg">{cart?.size || "N/A"}</p>
                  </div>
                  <div>
                    <p>{cart.quantity}</p>
                  </div>
                  <div>TK. {cart.Subtotal}</div>

                  {/* 3️⃣ Add remove button */}
                  <button
                    onClick={() => handleRemove(cart.id)}
                    className="text-white cursor-pointer ml-2 rounded"
                  >
                    <Trash
                      size={16}
                      className="bg-[#C9302C] hover:bg-[#AC0000] duration-300 h-7 w-7 p-1 rounded"
                    />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            )}
          </div>
        </div>

        {/* Mobile Cart */}
        <div className="lg:hidden block">
          <h2 className="font-medium md:text-3xl text-xl text-center py-8">
            Your Cart
          </h2>

          {cartList.map((cart) => (
            <div
              key={cart.id}
              className="flex flex-col mb-5 bg-primary/20 hover:bg-[#E6E6E6] transition-colors duration-200 rounded"
            >
              <div className="bg-primary flex justify-between border-t border-black/5 py-3 px-3 rounded-t">
                <div>
                  <p className="text-white font-medium text-[15px] hover:underline cursor-pointer px-1">
                    {cart?.title}
                  </p>
                </div>

                <div className="w-[60px] h-[60px]">
                  <Image
                    src={cart?.thumbelImage}
                    alt=""
                    width={120}
                    height={120}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="hover:bg-[#E6E6E6] rounded-b">
                <div className="flex justify-between border-t border-black/5 py-3 px-3">
                  <p className="font-medium text-[15px]">Price</p>
                  <p>৳ {cart?.price}</p>
                </div>

                <div className="flex justify-between border-t border-black/5 py-3 px-3">
                  <p className="font-medium text-[15px]">Quantity</p>
                  <p>{cart.quantity}</p>
                </div>

                <div className="flex justify-between border-t border-black/5 py-3 px-3">
                  <p className="font-medium text-[15px]">Subtotal</p>
                  <p>TK. {cart.Subtotal}</p>
                </div>

                <button
                  onClick={() => handleRemove(cart.id)}
                  className="text-white cursor-pointer"
                >
                  <Trash className="bg-[#C9302C] hover:bg-[#AC0000] duration-300 h-7 w-7 p-1 rounded" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total and Navigation */}
        <div className="flex flex-col gap-8 justify-between items-center my-12">
          <div className="text-xl font-medium flex items-center gap-2">
            <span>Total Amount TK:</span>
            <span className="text-2xl text-primary">
              {cartList.reduce((total, item) => total + item.Subtotal, 0)}
            </span>
          </div>

          <Link href="/checkout" className="w-[70%] sm:w-[50%] md:w-[40%]">
            <div className="text-white text-sm font-medium text-center bg-primary hover:bg-[#AC0000] cursor-pointer duration-300 px-2 py-2">
              <span>Proceed To Checkout</span>
            </div>
          </Link>

          <Link
            href="/shop"
            className="text-white text-sm font-semimedium text-center w-[70%] sm:w-[50%] md:w-[40%] bg-primary hover:bg-[#AC0000] px-2 py-2 mt-3 duration-300"
          >
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
