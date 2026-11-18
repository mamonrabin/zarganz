"use client";

import { ArrowRight, LockKeyhole, Mail, Sparkles, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Register = () => {
  return (
    <main className="Container flex min-h-screen items-center justify-center pb-12 pt-12">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_80px_rgba(0,0,0,0.07)] lg:grid-cols-2">
        {/* Left Editorial Panel */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden min-h-[650px] overflow-hidden bg-[#1C1C1C] p-12 text-white lg:flex lg:flex-col lg:justify-between"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(172,0,0,0.35),transparent_45%)]" />

          <div className="relative z-10">
            <span className="text-xs tracking-[0.35em] text-white/50">
              ZARGANZ / MEMBER ACCESS
            </span>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Sparkles className="mb-6 text-[#AC0000]" size={30} />

              <h1 className="font-serif text-5xl font-medium leading-[1.15] xl:text-6xl">
                Style is a way
                <br />
                to express
                <br />
                <span className="italic text-[#AC0000]">yourself.</span>
              </h1>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
                Discover timeless essentials and contemporary collections.
                Welcome back to the world of ZARGANZ.
              </p>
            </motion.div>
          </div>

          <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-6 text-[10px] tracking-[0.2em] text-white/40">
            <span>CONTEMPORARY FASHION</span>
            <span>EST. ZARGANZ</span>
          </div>
        </motion.div>

        {/* Register Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="flex min-h-[650px] flex-col justify-center px-6 py-14 sm:px-12 lg:px-16"
        >
          {/* Mobile Brand Label */}
          <div className="mb-10 text-center lg:hidden">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#AC0000]">
              ZARGANZ
            </span>
          </div>

          <div className="mb-10">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-5 block h-[3px] bg-[#AC0000]"
            />

            <p className="mb-3 text-[10px] font-semibold tracking-[0.3em] text-[#AC0000]">
              WELCOME BACK
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-tight text-[#262626] sm:text-5xl">
              Sign Up<span className="text-[#AC0000]">.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              If you have an account with us, please log in.
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="group">
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                Your Name
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#AC0000]"
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full  border-b border-gray-200 bg-transparent py-3 pl-8 pr-3 text-sm text-[#262626] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#AC0000]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#AC0000]"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full  border-b border-gray-200 bg-transparent py-3 pl-8 pr-3 text-sm text-[#262626] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#AC0000]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#AC0000]"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border-b border-gray-200 bg-transparent py-3 pl-8 pr-3 text-sm text-[#262626] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#AC0000]"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                href="/account/recover"
                className="text-xs text-gray-500 transition-colors duration-300 hover:text-[#AC0000]"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group flex w-full items-center justify-center gap-3 bg-[#262626] px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#AC0000]"
            >
              Sign In
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            {/* Register */}
            <div className="mt-5 border-t border-gray-100 pt-7 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/account/login"
                  className="font-semibold text-[#262626] underline decoration-[#AC0000] underline-offset-4 transition-colors duration-300 hover:text-[#AC0000]"
                >
                  Sign in

                </Link>
              </p>
            </div>
          </form>

          <p className="mt-12 text-center text-[9px] tracking-[0.2em] text-gray-400">
            © {new Date().getFullYear()} ZARGANZ. ALL RIGHTS RESERVED.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Register;
