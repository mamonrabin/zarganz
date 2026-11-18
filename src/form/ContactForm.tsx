
"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ArrowRight, Loader2, Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    console.log(data);
  };

  const inputStyle =
    "w-full rounded-sm border border-gray-200 bg-[#FAFAF9] px-4 py-3 text-sm text-[#262626] outline-none transition placeholder:text-gray-400 focus:border-[#AC0000] focus:bg-white";

  const errorStyle = "mt-1.5 block text-[11px] text-red-600";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
      {/* Name & Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-medium text-[#262626]">
            Full Name <span className="text-[#AC0000]">*</span>
          </label>

          <input
            {...register("name", {
              required: "Please enter your name",
            })}
            className={inputStyle}
            type="text"
            placeholder="Your name"
          />

          {errors.name && (
            <span className={errorStyle}>{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-[#262626]">
            Email Address <span className="text-[#AC0000]">*</span>
          </label>

          <input
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email",
              },
            })}
            className={inputStyle}
            type="email"
            placeholder="example@email.com"
          />

          {errors.email && (
            <span className={errorStyle}>{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-xs font-medium text-[#262626]">
          Phone Number <span className="text-[#AC0000]">*</span>
        </label>

        <input
          {...register("phone", {
            required: "Please enter your phone number",
          })}
          className={inputStyle}
          type="tel"
          placeholder="+880 1XXXXXXXXX"
        />

        {errors.phone && (
          <span className={errorStyle}>{errors.phone.message}</span>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block text-xs font-medium text-[#262626]">
          Your Message <span className="text-[#AC0000]">*</span>
        </label>

        <textarea
          {...register("message", {
            required: "Please enter your message",
          })}
          className={`${inputStyle} min-h-[130px] resize-y`}
          placeholder="How can we help you?"
          rows={5}
        />

        {errors.message && (
          <span className={errorStyle}>{errors.message.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#AC0000] px-5 text-xs font-semibold uppercase tracking-[1.5px] text-white transition duration-300 hover:bg-[#262626] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={14} />
            Send Message
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-gray-400">
        Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
};

export default ContactForm;
