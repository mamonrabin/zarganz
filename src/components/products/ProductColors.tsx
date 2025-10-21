"use client"
import { colorList } from "@/src/api/colorApi";
import React, { useState } from "react";

const ProductColors = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
      {colorList &&
        colorList.map((clr: string, i: number) => {
          const isSelected = selectedColor === clr;
          return (
            <p
              key={i}
              onClick={() => setSelectedColor(clr)}
              className={`px-3 py-2 text-center border font-medium uppercase text-xs sm:text-sm cursor-pointer transition-all duration-300 
                ${
                  isSelected
                    ? "border-[#AC0000] text-[#AC0000] bg-[#AC0000]/10"
                    : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                }`}
            >
              {clr.toUpperCase()}
            </p>
          );
        })}
    </div>
  );
};

export default ProductColors;
