
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import {
  Mail,
  Phone,
  UserRound,
  MapPin,
  Home,
  CreditCard,
  TicketPercent,
  CheckCircle2,
} from "lucide-react";
import React, { useState } from "react";
import cash from "@/src/assets/payment/cash.png";
import bkash from "@/src/assets/payment/bkash.jpg";
import card from "@/src/assets/payment/card.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { districtList } from "../utilits/allDistict";

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  altNumber: string;
  houseNo: string;
  road: string;
  city: string;
  condition: string;
  paymentMethod: string;
}

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<CheckoutFormData> = async (data) => {
    setLoading(true);

    console.log("Form Data:", data);

    setTimeout(() => {
      setLoading(false);

      Swal.fire({
        title: "Order Confirmed!",
        text: "Your order has been placed successfully.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#AC0000",
      }).then(() => {
        router.push("/");
      });

      reset();
    }, 2000);
  };

  const inputStyle =
    "h-10 w-full rounded-md border border-gray-200 bg-[#FAFAF9] px-3 text-xs text-[#262626] outline-none transition placeholder:text-gray-400 focus:border-[#AC0000] focus:bg-white focus:ring-2 focus:ring-[#AC0000]/5";

  const errorStyle = "mt-1 block text-[10px] text-red-500";

  return (
    <div>
      {/* Form Heading */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#AC0000]">
            Almost There
          </p>
          <h2 className="mt-1 font-serif text-2xl text-[#262626]">
            Checkout Information
          </h2>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F9EEEE] text-[#AC0000]">
          <CheckCircle2 size={19} />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Personal Information */}
        <section className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
            <UserRound size={16} className="text-[#AC0000]" />
            <h3 className="text-xs font-semibold text-[#262626]">
              Personal Information
            </h3>
          </div>

          <div className="space-y-3">
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
                Full Name *
              </label>
              <div className="relative">
                <UserRound
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  {...register("name", { required: true })}
                  className={`${inputStyle} pl-9`}
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && <span className={errorStyle}>Name is required</span>}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    {...register("phone", { required: true })}
                    className={`${inputStyle} pl-9`}
                    type="tel"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
                {errors.phone && (
                  <span className={errorStyle}>Phone is required</span>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    {...register("email")}
                    className={`${inputStyle} pl-9`}
                    type="email"
                    placeholder="Email (optional)"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Information */}
        <section className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
            <MapPin size={16} className="text-[#AC0000]" />
            <h3 className="text-xs font-semibold text-[#262626]">
              Shipping Information
            </h3>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
                  House No.
                </label>
                <div className="relative">
                  <Home
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    {...register("houseNo")}
                    className={`${inputStyle} pl-9`}
                    placeholder="House number"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
                  Road / Area
                </label>
                <input
                  {...register("road")}
                  className={inputStyle}
                  placeholder="Road / Area"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
                Detailed Address *
              </label>
              <input
                {...register("address", { required: true })}
                className={inputStyle}
                placeholder="Village, street, landmark..."
              />
              {errors.address && (
                <span className={errorStyle}>Address is required</span>
              )}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
                  District *
                </label>
                <select
                  {...register("city", { required: true })}
                  className={`${inputStyle} cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select District
                  </option>
                  {districtList.map((district) => (
                    <option key={district} value={district.toLowerCase()}>
                      {district}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <span className={errorStyle}>Please select a district</span>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
                  Alternative Number
                </label>
                <input
                  {...register("altNumber")}
                  className={inputStyle}
                  type="tel"
                  placeholder="Optional number"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
                Order Note
              </label>
              <textarea
                {...register("message")}
                className="w-full resize-none rounded-md border border-gray-200 bg-[#FAFAF9] px-3 py-2.5 text-xs outline-none transition placeholder:text-gray-400 focus:border-[#AC0000] focus:bg-white"
                placeholder="Any special instructions? (Optional)"
                rows={3}
              />
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
            <CreditCard size={16} className="text-[#AC0000]" />
            <h3 className="text-xs font-semibold text-[#262626]">
              Payment Method
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "CashOnDelivery", image: cash, label: "Cash on Delivery" },
              { value: "bkash", image: bkash, label: "bKash" },
              { value: "card", image: card, label: "Card" },
            ].map((method) => (
              <label key={method.value} className="cursor-pointer">
                <input
                  type="radio"
                  value={method.value}
                  {...register("paymentMethod", { required: true })}
                  className="peer sr-only"
                />

                <div className="flex h-[65px] flex-col items-center justify-center gap-1 rounded-md border border-gray-200 bg-[#FAFAF9] p-2 transition hover:border-[#AC0000] peer-checked:border-[#AC0000] peer-checked:bg-[#FFF7F7] peer-checked:ring-1 peer-checked:ring-[#AC0000]">
                  <Image
                    src={method.image}
                    alt={method.label}
                    width={75}
                    height={35}
                    className="h-7 w-auto object-contain"
                  />
                  <span className="text-[9px] text-gray-500">
                    {method.label}
                  </span>
                </div>
              </label>
            ))}
          </div>

          {errors.paymentMethod && (
            <span className={errorStyle}>Please select a payment method</span>
          )}
        </section>

        {/* Coupon */}
        <section className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <TicketPercent size={16} className="text-[#AC0000]" />
            <h3 className="text-xs font-semibold text-[#262626]">
              Have a Coupon?
            </h3>
          </div>

          <div className="flex gap-2">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className={inputStyle}
              placeholder="Enter coupon code"
            />
            <button
              type="button"
              className="h-10 shrink-0 rounded-md bg-[#262626] px-4 text-[10px] font-semibold text-white transition hover:bg-[#AC0000]"
            >
              Apply
            </button>
          </div>
        </section>

        {/* Terms */}
        <div>
          <label className="flex cursor-pointer items-start gap-2">
            <input
              {...register("condition", { required: true })}
              type="checkbox"
              className="mt-0.5 h-3.5 w-3.5 accent-[#AC0000]"
              id="condition"
            />
            <span className="text-[11px] leading-5 text-gray-500">
              I agree to the{" "}
              <span className="font-medium text-[#AC0000]">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="font-medium text-[#AC0000]">
                Privacy Policy
              </span>{" "}
              of ZARGANZ.
            </span>
          </label>

          {errors.condition && (
            <span className="ml-5 text-[10px] text-red-500">
              Please accept the terms and conditions
            </span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#AC0000] text-xs font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#850000] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Processing Order...
            </>
          ) : (
            <>
              Confirm Order
              <CheckCircle2 size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
