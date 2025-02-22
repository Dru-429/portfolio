"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import TechCapsule from "../ui/TechCapsule";

export default function FolioCard({
  title,
  img,
  gitLink,
  liveLink,
  about,
  stack,
}) {
  return (
    <motion.div
      className="bg-[#fde1a922] w-full sm:w-[90%] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between items-center gap-10 sm:flex-row p-5 mb-5 hover:shadow-[5px_5px_10px_rgba(0, 0, 0, 0.2)] transition-shadow duration-200"
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <Image 
          src={img} 
          alt={title} 
          width={520}
          height={800}
          objectFit="cover" 
        />
      </div>

      <div className="p-6">

        {/* //links */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-primary">{title}</h2>
          <div className="flex gap-4">
            {gitLink && (
              <div
                className="text-text text-2xl hover:text-secondary hover:scale-110 duration-200"
              >
                <Link href={gitLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-text text-2xl hover:text-secondary" />
                </Link>
              </div>
            )}

            {liveLink && (
              <motion.div 
                className="text-text text-2xl hover:text-secondary hover:scale-110 duration-200"
                whileTap={{scale: 1.0 }}
              > 
                <Link 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        <p className="text-text mb-4">{about}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            // <span
            //   key={index}
            //   className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
            // >
            //   {tech}
            // </span>

            <TechCapsule 
              index={index}
              item={tech}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
