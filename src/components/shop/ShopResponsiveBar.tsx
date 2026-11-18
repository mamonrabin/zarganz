
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import {
  ChevronDown,
  X,
  RotateCcw,
  Check,
  SlidersHorizontal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PriceRangeFilter from "./PriceRange";

const ShopResponsiveBar = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>("1");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOptions = [
    { id: "1", title: "Price", options: [] },
    {
      id: "2",
      title: "Category",
      options: [
        "Handbags",
        "Tote Bags",
        "Shoes",
        "Perfume",
        "Watches",
        "Sale",
        "Mules",
      ],
    },
    {
      id: "3",
      title: "Colors",
      options: [
        "Black",
        "White",
        "Beige",
        "Red",
        "Blue",
        "Green",
        "Pink",
        "Yellow",
      ],
    },
    {
      id: "4",
      title: "Availability",
      options: ["In Stock", "Out of Stock"],
    },
  ];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  const handleCheckboxChange = (value: string) => {
    setSelectedFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const clearAll = () => {
    setSelectedFilters([]);
    setMinPrice(0);
    setMaxPrice(500);
  };

  const hasActiveFilters =
    selectedFilters.length > 0 || minPrice > 0 || maxPrice < 500;

  return (
    <div>
      {/* Filter Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#262626] transition hover:border-[#AC0000] hover:text-[#AC0000]"
      >
        <PiSlidersHorizontalBold size={16} />
        Filters
        {hasActiveFilters && (
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#AC0000] px-1 text-[9px] text-white">
            {selectedFilters.length +
              (minPrice > 0 || maxPrice < 500 ? 1 : 0)}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black"
            />

            {/* Filter Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[101] flex h-full w-full max-w-[390px] flex-col bg-[#FAFAF9] shadow-2xl"
            >
              {/* Dark Header */}
              <div className="bg-[#1C1C1C] px-5 pb-5 pt-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal size={17} />
                    <span className="text-[11px] font-semibold uppercase tracking-[2px]">
                      Refine Your Selection
                    </span>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
                    aria-label="Close filters"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[3px] text-white/50">
                      ZARGANZ COLLECTION
                    </p>
                    <h2 className="mt-1 font-serif text-3xl">
                      Filters
                    </h2>
                  </div>

                  <button
                    onClick={clearAll}
                    className="flex items-center gap-1.5 pb-1 text-[11px] text-white/70 transition hover:text-white"
                  >
                    <RotateCcw size={12} />
                    Clear all
                  </button>
                </div>

                {hasActiveFilters && (
                  <p className="mt-3 text-[10px] text-white/50">
                    {selectedFilters.length} options selected
                  </p>
                )}
              </div>

              {/* Filter Sections */}
              <div className="flex-1 overflow-y-auto px-5 py-3">
                {filterOptions.map((filter) => {
                  const isExpanded = expanded === filter.id;
                  const selectedCount = filter.options.filter((option) =>
                    selectedFilters.includes(option)
                  ).length;

                  return (
                    <div
                      key={filter.id}
                      className="border-b border-gray-200"
                    >
                      <button
                        onClick={() =>
                          setExpanded(isExpanded ? null : filter.id)
                        }
                        className="flex w-full items-center justify-between py-4 text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#262626]">
                            {filter.title}
                          </span>

                          {selectedCount > 0 && (
                            <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-semibold text-[#AC0000]">
                              {selectedCount}
                            </span>
                          )}
                        </div>

                        <ChevronDown
                          size={16}
                          className={`text-gray-400 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-[#AC0000]" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5">
                              {filter.title === "Price" ? (
                                <PriceRangeFilter
                                  minPrice={minPrice}
                                  maxPrice={maxPrice}
                                  onMinChange={setMinPrice}
                                  onMaxChange={setMaxPrice}
                                />
                              ) : filter.title === "Colors" ? (
                                <div className="flex flex-wrap gap-3">
                                  {filter.options.map((color) => {
                                    const colorMap: Record<string, string> = {
                                      Black: "#171717",
                                      White: "#FFFFFF",
                                      Beige: "#D8C3A5",
                                      Red: "#AC0000",
                                      Blue: "#315A9B",
                                      Green: "#477B58",
                                      Pink: "#E9A7B5",
                                      Yellow: "#E8C84A",
                                    };

                                    const active =
                                      selectedFilters.includes(color);

                                    return (
                                      <button
                                        key={color}
                                        type="button"
                                        onClick={() =>
                                          handleCheckboxChange(color)
                                        }
                                        title={color}
                                        aria-label={color}
                                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
                                          active
                                            ? "border-[#AC0000] ring-2 ring-[#AC0000]/20"
                                            : "border-gray-200 hover:border-gray-400"
                                        }`}
                                      >
                                        <span
                                          className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10"
                                          style={{
                                            backgroundColor: colorMap[color],
                                          }}
                                        >
                                          {active && (
                                            <Check
                                              size={13}
                                              className={
                                                color === "White" ||
                                                color === "Yellow" ||
                                                color === "Beige"
                                                  ? "text-black"
                                                  : "text-white"
                                              }
                                            />
                                          )}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div className="grid grid-cols-2 gap-2">
                                  {filter.options.map((option) => {
                                    const active =
                                      selectedFilters.includes(option);

                                    return (
                                      <button
                                        key={option}
                                        type="button"
                                        onClick={() =>
                                          handleCheckboxChange(option)
                                        }
                                        className={`flex items-center justify-between rounded-md border px-3 py-2.5 text-left text-[11px] transition ${
                                          active
                                            ? "border-[#AC0000] bg-red-50 text-[#AC0000]"
                                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
                                        }`}
                                      >
                                        {option}
                                        {active && <Check size={13} />}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Fixed Bottom Actions */}
              <div className="border-t border-gray-200 bg-white p-5">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Selected filters</span>
                  <span className="font-semibold text-[#262626]">
                    {selectedFilters.length +
                      (minPrice > 0 || maxPrice < 500 ? 1 : 0)}
                  </span>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#AC0000] text-[11px] font-semibold uppercase tracking-[2px] text-white transition hover:bg-[#850000]"
                >
                  View Results
                  <span className="text-base">→</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShopResponsiveBar;
