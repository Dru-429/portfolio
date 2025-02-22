"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

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
      className="bg-[#121212] rounded-2xl overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 md:h-80 w-full">
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <div className="flex space-x-4">
            {gitLink && (
              <Link href={gitLink} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-xl hover:text-gray-300" />
              </Link>
            )}
            {liveLink && (
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="text-white text-xl hover:text-gray-300" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-gray-400 mb-4">{about}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
