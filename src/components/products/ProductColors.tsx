
"use client";

import { colorList } from "@/src/api/colorApi";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const ProductColors = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {colorList?.map((clr: string, i: number) => {
          const isSelected = selectedColor === clr;

          return (
            <motion.button
              key={i}
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedColor(clr)}
              className={`relative flex items-center justify-center gap-2 overflow-hidden border px-3 py-2.5 text-center text-[10px] font-bold uppercase tracking-wide transition-all duration-300 ${
                isSelected
                  ? "border-[#AC0000] bg-[#AC0000]/5 text-[#AC0000]"
                  : "border-gray-200 bg-white text-gray-500 hover:border-[#AC0000] hover:text-[#AC0000]"
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="selected-color"
                  className="absolute inset-0 border border-[#AC0000]"
                  transition={{ duration: 0.25 }}
                />
              )}

              <span className="relative z-10">{clr}</span>

              {isSelected && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative z-10"
                >
                  <Check size={13} />
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>

      <p className="mt-3 text-[10px] text-gray-400">
        Selected color:{" "}
        <span className="font-bold uppercase text-[#262626]">
          {selectedColor || "Please select a color"}
        </span>
      </p>
    </div>
  );
};

export default ProductColors;
