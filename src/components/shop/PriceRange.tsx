"use client";

import { useEffect, useState } from "react";

interface PriceRangeFilterProps {
  products?: { price: number }[];
  minPrice?: number;
  maxPrice?: number;
  onMinChange?: (value: number) => void;
  onMaxChange?: (value: number) => void;
}

export default function PriceRangeFilter({
  products = [],
  minPrice = 0,
  maxPrice = 500,
  onMinChange = () => {},
  onMaxChange = () => {},
}: PriceRangeFilterProps) {
  const calculatedMaxPrice = 500;

  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice ?? calculatedMaxPrice);

  // ✅ Sync local state when props change
  useEffect(() => {
    setMin(minPrice ?? 0);
  }, [minPrice]);

  useEffect(() => {
    setMax(maxPrice ?? calculatedMaxPrice);
  }, [maxPrice]);

  // ✅ Update max dynamically when products change (and no maxPrice given)
  useEffect(() => {
    if (!maxPrice && products.length > 0) {
      const highestPrice = Math.max(...products.map((p) => p.price), 0);
      setMax(highestPrice);
      onMaxChange(highestPrice);
    }
  }, [products, maxPrice, onMaxChange]);

  const handleMinChange = (value: number) => {
    const safeMax = max ?? 0;
    const newMin = value <= safeMax ? value : safeMax;
    setMin(newMin);
    onMinChange(newMin);
  };

  const handleMaxChange = (value: number) => {
    const safeMin = min ?? 0;
    const newMax = value >= safeMin ? value : safeMin;
    setMax(newMax);
    onMaxChange(newMax);
  };

  return (
    <div className="group">
      <div className="pb-4">
        <div className="relative my-4">
          <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 bg-gray-200 rounded" />
          <div
            className="absolute top-1/2 h-1 bg-black rounded"
            style={{
              left: `${((min ?? 0) / calculatedMaxPrice) * 100}%`,
              right: `${100 - ((max ?? 0) / calculatedMaxPrice) * 100}%`,
            }}
          />

          {/* Min slider */}
          <input
            type="range"
            min={0}
            max={calculatedMaxPrice}
            value={min ?? 0}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className="absolute z-20 top-[2px] w-full appearance-none h-0 range-thumb"
          />

          {/* Max slider */}
          <input
            type="range"
            min={0}
            max={calculatedMaxPrice}
            value={max ?? 0}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            className="absolute z-10 top-[-3px] w-full appearance-none h-3 range-thumb bg-transparent"
          />
        </div>

        {/* Input boxes */}
        <div className="flex items-center gap-2 pt-6">
          <label className="flex items-center gap-1 border rounded px-2 py-1 text-sm">
            <span className="text-gray-500">৳</span>
            <input
              type="number"
              min={0}
              max={calculatedMaxPrice}
              value={min ?? 0}
              onChange={(e) => handleMinChange(Number(e.target.value))}
              className="w-20 outline-none"
            />
          </label>

          <span className="text-gray-500">to</span>

          <label className="flex items-center gap-1 border rounded px-2 py-1 text-sm">
            <span className="text-gray-500">৳</span>
            <input
              type="number"
              min={0}
              max={calculatedMaxPrice}
              value={max ?? 0}
              onChange={(e) => handleMaxChange(Number(e.target.value))}
              className="w-20 outline-none"
            />
          </label>
        </div>
      </div>

      <style jsx>{`
        input[type="range"].range-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
        }
        input[type="range"].range-thumb::-moz-range-thumb {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
}
