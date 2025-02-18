"use client";

import React from "react";
import Header from "./Header.jsx";
import { easeIn, motion } from "framer-motion";
import AnimateTitle from "../ui/AnimateTitle.jsx";
import Link from "next/link.js";
import { SiGithub } from "react-icons/si";
const HeroSection = () => {
  return (
    <section id="home">
      <div className="w-100% min-h-screen relative">
        <Header />

        <div className="mt-40 mb-52 sm:mb-0 mx-2 sm:mx-10 sm:w-1/2">
          <div className="sm:flex justify-between items-start leading-none tracking-tighter relative">

            <span className="text-lg px-1 relative top-3 text-text right-4">
              Dhruv Sahoo
            </span>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeIn }}
              className="h-[2px] bg-accent sm:w-[18%] w-28 absolute top-9 -left-3"
            ></motion.div>

            <AnimateTitle first="Web Devel" italic="o" second="per" />
          </div>

          <span className="text-4xl sm:text-6xl font-[600] tracking-tight bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text pt-8">
            & Creative Designer
          </span>

          <p className="mt-7 w-[95%] text-text tracking-tight text-lg">
            Crafting captivating digital experiences and designing websites that
            leave a lasting impression. By Building beautiful, functional
            frontends.
          </p>
        </div>

        <div className="px-2 sm:px-10 border-t-[1px] mt-24 border-text flex justify-between items-center relative">

          <div className=" py-5 text-sm text-secondary">
            <h3>Email:</h3>
            <p>contact.dhruvsahoo@gmail.com</p>
          </div>

          <Link 
            href="https://github.com/Dru-429" 
            className="relative "
        >
            <SiGithub className="text-4xl"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
