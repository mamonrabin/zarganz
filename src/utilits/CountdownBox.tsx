"use client";

import { motion } from "framer-motion";
const CountdownBox = ({ label, value }: { label: string; value: string }) => {
  console.log(label);
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center  lg:p-2 "
    >
      <motion.span
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-semibold tracking-wider text-white"
      >
        {value}
      </motion.span>
      <span className="text-white">{label}</span>
    </motion.div>
  );
};

export default CountdownBox;
