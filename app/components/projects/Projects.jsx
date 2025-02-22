"use client";

import React from "react";
import projectData from "./ProjectData.jsx";
import AnimateTitle2 from "../ui/AnimateTitle2";
import FolioCard from "./FolioCard";

const Projects = () => {
  const projectsData =  projectData;
  console.log(projectsData);

  return (
    <section id="projects">
      <div>
        <AnimateTitle2 text="PROJECTS" italicIndex={2} delay={0.08} />
      </div>

      <div className="flex flex-col items-center justify-center">
        {projectsData.map((work, index) => (
          <FolioCard
            key={index}
            img={work.img}
            title={work.title}
            gitLink={work.gitLink}
            liveLink={work.liveLink}
            about={work.about}
            stack={work.stack}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
