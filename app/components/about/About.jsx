"use client";

import { easeInOut, motion, useAnimationControls } from "framer-motion";
import { easeIn } from "framer-motion/dom";
import React, { useRef } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import AnimateTitle2 from "../ui/AnimateTitle2";
import Link from "next/link";

const About = () => {
  const controls = useAnimationControls();

  const handelHover = () => {
    controls.start({ position: "relative", x: 0, opacity: 1 });
  };

  return (
    <section id="about">
      <div className="w-full min-h-screen px-2 md:px-10 flex md:flex-row flex-col justify-between md:items-start pb-28 md:pb-0 mb-12 border-b-[1px] border-text relative">
        <>
          <AnimateTitle2 text="ABOUT" italicIndex={2} delay={0.08} />
        </>

        <div className="sm:w-[70%] relative">
          <p className="text-lg tracking-tight pt-5">
            I'm a frontend web developer, Notion template designer, and web
            automation builder with over a year of experience creating digital
            solutions that are both visually compelling and functionally
            powerful.
          </p>

          <p className="text-lg tracking-tight pt-5">
             I craft clean, modern websites with thoughtful animations
            and responsive design — ensuring a smooth, engaging user experience.
            Beyond design, I help businesses, freelancers, and individuals
            automate repetitive tasks through custom web bots and browser-based
            workflows.
          </p>

          <p className="text-lg tracking-tight pt-5">
            Whether it's posting content, scraping data, managing
            outreach, or sending personalized emails to multiple clients at once
            — I build automation tools that save time, reduce manual work, and
            keep things running efficiently.
          </p>

          <p className="text-lg tracking-tight pt-5">
            I also design custom Notion templates to streamline organization and improve productivity — from
            personal use to full business systems.
            <br />
            <br />
            If you’re looking to elevate your digital presence and simplify your workflow, I’d love to help.
          </p>

          <Link href="#contact">
            <motion.a
              target="_blank"
              className="text-sm font-[500] px-4 py-1 border-[1px] border-secondary text-background rounded-3xl relative top-10 bg-primary flex gap-2 items-center w-fit hover:shadow-xl shadow-accent"
              whileHover={{ scale: 1.08, backgroundColor: "#F77F00" }}
              whileTap={{ scale: 0.9, backgroundColor: "#F77F00" }}
              transition={{ duration: 0.15, ease: easeIn }}
              onMouseEnter={handelHover}
            >
              <span>Lets's Connect</span>
              <motion.sapn
                initial={{ position: "absolute", x: -10, opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5, ease: easeInOut }}
              >
                <FaArrowCircleRight />
              </motion.sapn>
            </motion.a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
