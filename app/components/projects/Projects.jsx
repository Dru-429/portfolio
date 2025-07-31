"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import projectData from "./ProjectData.jsx";
import AnimateTitle2 from "../ui/AnimateTitle2";
import FolioCard from "./FolioCard";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projectsData = projectData;

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };
  return (
    <section
      id="projects"
      className="relative w-[90%] md:w-full px-4 md:mx-10 my-20 border-t-[2px] border-foreground/30 "
      ref={ref}
    >
      {/* Title Section */}
      <motion.div
        className="my-20 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimateTitle2 text="PROJECTS" italicIndex={2} delay={0.06} />

        {/* Decorative Line */}
        {/* <motion.div
          className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "200px" } : { width: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        /> */}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="flex flex-col items-center justify-center w-full gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projectsData.map((work, index) => (
          <FolioCard
            key={index}
            index={index}
            img={work.img}
            title={work.title}
            gitLink={work.gitLink}
            liveLink={work.liveLink}
            about={work.about}
            stack={work.stack}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
