// ShopCategory.jsx
"use client";

import { categoryList } from '@/src/api/categoryApi';
import React from 'react';

interface ShopCategoryProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const ShopCategory: React.FC<ShopCategoryProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='lg:flex hidden items-center justify-between border-b mt-4 Container'>
      <div className="flex items-center gap-4 mb-4">
        {/* All option */}
        <div
          onClick={() => setSelectedCategory("all")}
          className={`text-base font-medium uppercase cursor-pointer transition tracking-widest 
            ${selectedCategory === "all" ? "text-[#AC0000]" : "hover:text-[#AC0000]"}`}
        >
          <p>All</p>
        </div>

        {/* Other categories */}
        {categoryList.map((category) => (
          <div
            key={category.id}
            onClick={() => setSelectedCategory(category.category)}
            className={`text-base font-medium uppercase cursor-pointer transition tracking-widest 
              ${selectedCategory === category.category ? "text-[#AC0000]" : "hover:text-[#AC0000]"}`}
          >
            <p>{category.category}</p>
          </div>
        ))}
      </div>

      <div>
        <p className='text-sm text-[#9D9D9D]'>125 <span>Items</span></p>
      </div>
    </div>
  );
};

export default ShopCategory;
