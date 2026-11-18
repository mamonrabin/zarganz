
"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";

import { Search, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <Sheet>
      {/* Search Trigger */}
      <SheetTrigger asChild>
        <button
          aria-label="Open search"
          className="group cursor-pointer flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#AC0000]/10"
        >
          <Search
            size={19}
            strokeWidth={1.6}
            className="text-current transition-all duration-300 group-hover:scale-110 group-hover:text-[#AC0000]"
          />
        </button>
      </SheetTrigger>

      {/* Search Panel */}
      <SheetContent
        side="top"
        className="!max-h-[90vh] overflow-y-auto border-0 bg-[#FAF9F7] px-5 pb-12 pt-10 shadow-2xl sm:px-10 lg:px-60"
      >
        <SheetHeader className="mx-auto w-full max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between"
          >
            <div>
              <p className="mb-2 text-[10px] font-semibold tracking-[0.35em] text-[#AC0000]">
                ZARGANZ / DISCOVER
              </p>

              <h2 className="font-serif text-2xl font-medium text-[#262626] sm:text-3xl">
                What are you looking for?
              </h2>
            </div>

            {/* Close Button */}
            <SheetClose asChild>
              <button
                aria-label="Close search"
                className="group cursor-pointer absolute top-10 md:right-28 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#262626] transition-all duration-300 hover:border-[#AC0000] hover:bg-[#AC0000] hover:text-white"
              >
                <X
                  size={18}
                  className="transition-transform  duration-300 group-hover:rotate-90"
                />
              </button>
            </SheetClose>
          </motion.div>

          {/* Search Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group mt-10 flex w-full items-center border-b border-[#262626]/25 pb-3 transition-colors duration-300 focus-within:border-[#AC0000]"
          >
            <Search
              size={23}
              strokeWidth={1.5}
              className="mr-4 shrink-0 text-gray-400 transition-colors duration-300 group-focus-within:text-[#AC0000]"
            />

            <input
              type="search"
              placeholder="Search products, collections..."
              className="w-full bg-transparent py-2 text-base text-[#262626] outline-none placeholder:text-gray-400 sm:text-lg"
            />

            <button
              type="submit"
              aria-label="Submit search"
              className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#262626] text-white transition-all duration-300 hover:bg-[#AC0000]"
            >
              <ArrowRight size={18} />
            </button>
          </motion.form>

          {/* Popular Searches */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8"
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Popular Searches
            </p>

            <div className="flex flex-wrap gap-2">
              {["New Arrivals", "Men", "Women", "T-Shirts", "Collections"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs text-gray-600 transition-all duration-300 hover:border-[#AC0000] hover:bg-[#AC0000] hover:text-white"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>

          {/* Bottom Text */}
          <p className="mt-12 text-center text-[9px] tracking-[0.25em] text-gray-400">
            FIND YOUR STYLE · ZARGANZ
          </p>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchBar;
