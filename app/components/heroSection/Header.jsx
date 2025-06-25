"use client"

import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-1 px-1 sm:px-7 py-1md:py-2 box-border sticky backdrop-blur-md bg-accent/10 rounded-3xl p-8 border border-accent/20 shadow-2xl top-2 md:top-4 z-50">
      <div>
        <span className="text-accent sm:text-3xl text-2xl leading-none italic sm:px-2 px-2 sm:pr-2">
          dru
        </span>
        <span className="text-xl leading-none tracking-tighter text-foreground">
          Dhruv Sahoo
        </span>
      </div>
      <div className="sm:w-[45%] w-[25%] flex items-center justify-between tracking-tighter leading-none pr-2 relative">
        <div className="hidden sm:flex gap-10 text-foreground ">
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
                className="border-[1px] min-w-[97px] rounded-2xl box-border px-3 py-2 border-box text-foreground flex items-center justify-center bg-transparent hover:bg-primary hover:text-primary-foreground/ border-foreground/30 backdrop-blur-sm transition-all duration-200 "//
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.01,
                }}
                whileFocus={{ backgroundColor: "#212121", color: "#F1F1F1" }}
                transition={{ ease: easeIn, duration: 0.1 }}
              >
                {" "}{item[0]}{" "}
              </motion.a>
            </Link>
          ))}
            <ModeToggle />
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
