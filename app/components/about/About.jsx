"use client";

import {
  easeInOut,
  motion,
  useAnimationControls,
} from "framer-motion";
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
      <div className="w-full min-h-screen pt-20 px-2 sm:px-10 flex sm:flex-row flex-col justify-between sm:items-start pb-32 sm:pb-0 mb-15 border-b-[1px] border-zinc-800 relative">
        <>
          <AnimateTitle2 text="ABOUT" italicIndex={2} />
        </>

        <div className="sm:w-[70%] relative">
          <p className="text-lg tracking-tight pt-5">
            I'm a dedicated frontend web developer and Notion template designer
            passionate about crafting memorable digital experiences. With over a
            year of hands-on experience, I specialize in creating modern,
            standout websites that captivate audiences through simple yet
            impactful animations.
          </p>

          <p className="text-lg tracking-tight pt-5">
            I believe in the power of effective design to enhance a business's
            online presence. My expertise lies in selecting complementary color
            palettes and engaging typography to create unique and visually
            appealing websites.
          </p>

          <p className="text-lg tracking-tight pt-5">
            As a Notion enthusiast, I've honed my skills in creating custom
            Notion templates that streamline workflows and boost productivity.
            From personal organization to business management, my templates
            offer tailored solutions to help individuals and businesses achieve
            their goals.
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
