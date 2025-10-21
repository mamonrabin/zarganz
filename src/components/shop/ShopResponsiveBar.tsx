"use client";
import React, { useState, useEffect, useCallback } from "react";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PriceRangeFilter from "./PriceRange";

const ShopResponsiveBar = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOptions = [
    {
      id: "1",
      title: "Price",
      options: [],
    },
    {
      id: "2",
      title: "Category",
      options: ["Handbags", "Tote Bags", "Shoes", "Perfume", "Watches", "Sale", "Mules"],
    },
    {
      id: "3",
      title: "Colors",
      options: ["Black", "White", "Beige", "Red", "Blue", "Green", "Pink", "Yellow"],
    },
    {
      id: "4",
      title: "AVAILABILITY",
      options: ["In Stock", "Out of Stock"],
    },
  ];

  // Close on ESC key
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

  // Handle checkbox toggle
  const handleCheckboxChange = (value: string) => {
    setSelectedFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Check if any filter is selected
  const hasActiveFilters = selectedFilters.length > 0;

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 font-medium text-primary cursor-pointer"
      >
        <PiSlidersHorizontalBold size={16} />
        <span className="text-sm capitalize">filter</span>
      </button>

      {/* Overlay + Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-50"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="px-4 fixed top-0 right-0 w-120 max-w-[90%] h-full bg-white shadow-lg z-50 flex flex-col"
            >
              {/* Header */}
              <div className="px-4 pt-6 flex items-center justify-between pb-4">
                <div></div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 text-xl"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between px-4">
                <h2 className="uppercase font-semibold tracking-widest">
                  Filters
                </h2>
                <p
                  className="capitalize text-sm font-medium underline cursor-pointer"
                  onClick={() => setSelectedFilters([])}
                >
                  clear all
                </p>
              </div>

              {/* Scrollable Area */}
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                {filterOptions.map((filter) => {
                  const isExpanded = expanded === filter.id;

                  return (
                    <div
                      key={filter.id}
                      className="relative border-b before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[1px] before:w-0 before:bg-primary/60 before:transition-all before:duration-800 hover:before:left-0 hover:before:w-full"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() =>
                          setExpanded(isExpanded ? null : filter.id)
                        }
                        className="w-full flex items-center justify-between py-3 px-3 text-sm font-medium uppercase cursor-pointer"
                      >
                        {filter.title}
                        <ChevronDown
                          className={`h-4 w-4 transform transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Accordion Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 px-4 space-y-2 pb-3">
                              {filter.title === "Price" ? (
                                <PriceRangeFilter
                                  minPrice={minPrice}
                                  maxPrice={maxPrice}
                                  onMinChange={setMinPrice}
                                  onMaxChange={setMaxPrice}
                                />
                              ) : (
                                filter.options.map((option, index) => (
                                  <motion.label
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.2,
                                      delay: index * 0.05,
                                    }}
                                    className="flex items-center gap-2 text-sm cursor-pointer"
                                  >
                                    <input
                                      type="checkbox"
                                      id={`${filter.id}-${index}`}
                                      checked={selectedFilters.includes(option)}
                                      onChange={() =>
                                        handleCheckboxChange(option)
                                      }
                                      className="w-4 h-4 border border-gray-200 rounded-sm accent-black"
                                    />
                                    <span>{option}</span>
                                  </motion.label>
                                ))
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Bottom Button */}
                <div className="fixed bottom-5 ">
                  <button
                  onClick={() => setOpen(false)}
                    disabled={!hasActiveFilters}
                    className={`xl:w-[70vh] lg:w-[70vh] md:w-[50vh] sm:w-[50vh] w-[40vh] duration-300 font-medium text-center py-2.5 text-sm uppercase tracking-widest cursor-pointer ${
                      hasActiveFilters
                        ? "bg-black text-white hover:scale-95"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    VIEW RESULTS
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShopResponsiveBar;
