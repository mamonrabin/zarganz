
"use client";

import { categoryList } from "@/src/api/categoryApi";
import React from "react";

interface ShopCategoryProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const ShopCategory: React.FC<ShopCategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = [
    { id: "all", category: "All" },
    ...categoryList,
  ];

  return (
    <div className="hidden lg:flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center gap-7">
        {categories.map((category) => {
          const isActive =
            selectedCategory ===
            (category.id === "all" ? "all" : category.category);

          return (
            <button
              key={category.id}
              type="button"
              onClick={() =>
                setSelectedCategory(
                  category.id === "all" ? "all" : category.category
                )
              }
              className={`group relative pb-3 text-[12px] font-semibold uppercase tracking-[1.5px] transition-colors duration-300 ${
                isActive
                  ? "text-[#AC0000]"
                  : "text-[#777] hover:text-[#AC0000]"
              }`}
            >
              {category.category}

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#AC0000] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          );
        })}
      </div>

      <p className="pb-3 text-[11px] tracking-wide text-gray-400">
        <span className="font-semibold text-[#262626]">125</span> Items
      </p>
    </div>
  );
};

export default ShopCategory;
