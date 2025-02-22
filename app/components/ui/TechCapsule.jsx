"use client"

import { easeIn, easeInOut, motion } from "framer-motion";
import React from "react";

const TechCapsule = ({ item, index }) => {

  
  return (
    <div>
      <motion.div
        key={index}
        className=" text-sm min-w-32 border-[1px] rounded-xl px-4 py-1 mr-5 border-primary scale-0.5 "
        // drag
        // dragConstraints={{
        //   top: -30,
        //   bottom: 30,
        //   right: 30,
        //   left: -30,
        // }}
        // dragTransition={{
        //   bounceStiffness: 600,
        // }}
        whileHover={{
          backgroundColor: "#FCBF49",
          color: "#01151f",
          border: "#F77F00",
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{ ease: easeInOut, duration: 0.2 }}
      >
        <div>
          <div className="flex w-full justify-center items-center gap-2">
            {item[1]}
            {item[0]}
          </div>
        </div>
        {/* <motion.div className="rounded-full w-3 bg-accent h-3 ml-2"></motion.div> */}
      </motion.div>
    </div>
  );
};

export default TechCapsule;
