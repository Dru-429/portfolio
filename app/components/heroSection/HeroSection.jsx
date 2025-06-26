"use client";

import React from "react";
import { easeIn, motion } from "framer-motion";
import AnimateTitle from "../ui/AnimateTitle.jsx";
import Link from "next/link.js";
import { SiGithub } from "react-icons/si";
const HeroSection = () => {
  return (
    <section id="home">
      <div className="w-100% min-h-screen relative">
        <div className="mt-[30vh] mb-28 md:mb-0 mx-2 md:mx-10 md:w-1/2 md:text-left">
          <div className="sm:flex justify-between items-start leading-none tracking-tighter relative">
            <motion.span className="text-lg px-1 relative top-3 text-foreground right-4 border-bottom-[1px] border-foreground">
              Dhruv Sahoo
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ duration: 1, ease: easeIn }}
                className="h-[2px] bg-secondary"
              ></motion.div>
            </motion.span>

            <AnimateTitle first="Web Devel" italic="o" second="per" />
          </div>

          <span className="text-4xl sm:text-6xl font-[600] tracking-tight bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text pt-8">
            & Automation Builder
          </span>

          <p className="mt-7 w-[95%] text-foreground tracking-tight text-lg">
            Building stunning websites and smart bots that automate your
            workflow. Crafting seamless digital experiences — from pixel — perfect
            frontends to powerful web automations.
          </p>
        </div>

        <div className="px-2 sm:px-10 border-t-[1px] mt-24 border-foreground flex justify-between items-center relative">
          <div className=" py-5 text-md text-foreground/80">
            <h3>Email:</h3>
            <p>contact.dhruvsahoo@gmail.com</p>
          </div>

          <Link href="https://github.com/Dru-429" className="relative ">
            <SiGithub className="text-4xl text-foreground/80 hover:text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
