"use client"

import { easeIn, motion } from "framer-motion";
import React from "react";

const AnimateTitle = ({ first, italic, second }) => {
  return (
    <div className="pt-10 sm:pt-0 text-6xl font-[600] leading-none relative sm:-left-10 bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text ">
        {first}
      <motion.span
        className="italic text-7xl leading-none"
        whileHover={{ fontStyle: "normal", scale: "0.9" }}
        transition={{ ease: easeIn, duration: 0.5 }}
      >
        {italic}
      </motion.span>
        {second}
    </div>
  );
};

export default AnimateTitle;
