"use client";

import CountdownBox from "@/utilits/CountdownBox";
import { useEffect, useState } from "react";

const FlashSaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 2); // Countdown to 2 hours from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      const hours = String(
        Math.floor((distance / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((distance / (1000 * 60)) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(
        2,
        "0"
      );

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
      } else {
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-2   rounded">
      <CountdownBox label="Days" value={timeLeft.hours} />
      <span className="text-white text-2xl font-bold mt-[-28px]">:</span>
      <CountdownBox label="Hours" value={timeLeft.minutes} />
      <span className="text-white text-2xl font-bold mt-[-28px]">:</span>
      <CountdownBox label="Minits" value={timeLeft.seconds} />
    </div>
  );
};

export default FlashSaleTimer;
