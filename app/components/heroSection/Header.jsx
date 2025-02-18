"use client"

import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px- py-4 sm:px-7 sm:py-2 box-border sticky sm:relative">
      <div>
        <span className="text-accent sm:text-3xl text-2xl leading-none italic sm:px-2 px-2 sm:pr-2">
          dru
        </span>
        <span className="text-xl leading-none tracking-tighter text-zinc-text">
          Dhruv Sahoo
        </span>
      </div>
      <div className="sm:w-[45%] w-[25%] flex items-center justify-between tracking-tighter leading-none pr-2 relative">
        <div className="hidden sm:flex gap-10 text-text ">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Projects", "#projects"],
          ].map((item, index) => (
            <Link                
             href={item[1]}
             key={index}
            >
              <motion.a
                className="border-[1px] w-[90px] rounded-2xl box-border px-3 py-2 border-primary text-text flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "#FCBF49",
                  color: "#01151f",
                }}
                whileFocus={{ backgroundColor: "#212121", color: "#F1F1F1" }}
                transition={{ ease: easeIn, duration: 0.2 }}
              >
                {" "}{item[0]}{" "}
              </motion.a>
            </Link>
          ))}
        </div>
        <div className="px-4 py-2 text-transparent hidden sm:visible"></div>
        <a
          href="#contact"
          className="text-background bg-accent  px-4 py-2 rounded-2xl absolute hover:scale-95 right-0"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
