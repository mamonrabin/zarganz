
"use client";

import { useEffect, useState } from "react";

const FlashSaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "02",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = Date.now() + 2 * 60 * 60 * 1000;

    const updateTimer = () => {
      const distance = Math.max(0, target - Date.now());

      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance / 3600000) % 24);
      const minutes = Math.floor((distance / 60000) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="group flex min-w-0 flex-col items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-[#650B16] to-[#991B2B] px-1 py-3 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:from-[#991B2B] hover:to-[#C8323E] sm:rounded-2xl sm:py-3.5"
        >
          <span className="font-mono text-xl font-black leading-none tracking-tight text-white sm:text-2xl">
            {item.value}
          </span>

          <span className="mt-1.5 text-[8px] font-extrabold uppercase tracking-wider text-white/65 sm:text-[9px]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FlashSaleTimer;
