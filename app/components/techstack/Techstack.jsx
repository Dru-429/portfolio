"use client";

import { easeInOut, motion } from "framer-motion";
import React, { useRef } from "react";

import { IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import {
  SiTailwindcss,
  SiFramer,
  SiAppwrite,
  SiGooglegemini,
  SiNotion,
  SiHostinger,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
} from "react-icons/si";
import { FaJs, FaFigma, FaGithub } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { RiFirebaseFill } from "react-icons/ri";
import AnimateTitle2 from "../ui/AnimateTitle2";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

const TeachStack = () => {
  return (
    <section id="techstack">
      <div className="w-full min-h-screen py-20 sm:pb-10 sm:px-10 px-2 flex flex-col sm:flex-row justify-between items-start relative">
        
        <AnimateTitle2 text="Tech Stack" delay={0.05} />

        <div className="flex gap-5 relative top-2 flex-wrap flex-row sm:w-[70%] justify-center sm:justify-start">
          {[
            ["HTML", <IoLogoHtml5 />],
            ["CSS", <IoLogoCss3 />],
            ["Tailwind CSS", <SiTailwindcss />],
            ["Java Sript", <FaJs />],
            ["Type Sript", <BiLogoTypescript />],
            ["React JS", <IoLogoReact />],
            ["Next JS", <SiNextdotjs />],
            ["Node JS", <FaNodeJs />],
            ["Express JS", <FaNodeJs />],
            ["Framer Motion", <SiFramer />],
            ["Context API", <TbApi />],
            ["Mongo DB", <SiMongodb />],
            ["Firebase", <RiFirebaseFill />],
            ["Appwrite", <SiAppwrite />],
            ["Gen AI", <SiGooglegemini />],
            ["Figma", <FaFigma />],
            ["Notion", <SiNotion />],
            ["Github", <FaGithub />],
            ["Postman", <SiPostman />],
            ["Hostinger", <SiHostinger />],
          ].map((item, index) => {
            return (
              <motion.div
                key={index}
                className="sm:text-lg min-w-48 flex justify-between items-center border-[1px] rounded-3xl px-4 py-1 mr-10 border-primary cursor-grab scale-0.5 "
                drag
                dragConstraints={{
                  top: -30,
                  bottom: 30,
                  right: 30,
                  left: -30,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                }}
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
                  <div className="flex items-center gap-2">
                    {item[1]}
                    {item[0]}
                  </div>
                </div>
                <motion.div className="rounded-full w-3 bg-accent h-3 ml-2"></motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeachStack;
