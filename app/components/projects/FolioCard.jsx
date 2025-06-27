"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import TechCapsule from "../ui/TechCapsule"
import AnimateTitle3 from "../ui/AnimateTitle3"

export default function FolioCard({ index, title, img, gitLink, liveLink, about, stack }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotateX: -15,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay: index * 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        delay: index * 0.2 + 0.3,
        ease: "easeOut",
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2 + 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div ref={ref} className="w-full">
      <AnimateTitle3
        key={index}
        title={title}
        sno={index}
        child={
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group relative overflow-hidden backdrop-blur-xl bg-secondary/10 hover:bg-secondary/15 border border-secondary/20 hover:border-secondary/30 rounded-t-3xl shadow-xl hover:shadow-2xl flex flex-col-reverse justify-between items-center gap-10 md:flex-row p-8 mb-8 transition-all duration-500"
            whileHover={{
              scale: 1.02,
              y: 10,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
              initial={{ scale: 0.8, rotate: -5 }}
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <motion.div
                className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            {/* Content Section */}
            <motion.div
              className="flex-1 relative z-10 md:w-[60%] lg:w-[70%] xl:w-[75%] " 
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Links Section */}
              <div className="flex justify-between items-center mb-6 md:justify-end md:items-end">
                <motion.h2
                  className="text-2xl font-bold text-secondary md:hidden "
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
                  {title}
                </motion.h2>

                <div className="flex gap-4">
                  {gitLink && (
                    <motion.div
                      className="group/icon relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                    >
                      <Link href={gitLink} target="_blank" rel="noopener noreferrer">
                        <div className="p-3 rounded-full backdrop-blur-md bg-secondary/10 hover:bg-secondary border border-secondary/20 hover:border-secondary/30 transition-all duration-300">
                          <FaGithub className="text-xl text-foreground/80 group-hover/icon:text-accent hover:text-primary transition-colors duration-200" />
                        </div>
                      </Link>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </motion.div>
                  )}

                  {liveLink && (
                    <motion.div
                      className="group/icon relative"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.9 }}
                    >
                      <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                        <div className="p-3 rounded-full backdrop-blur-md bg-secondary/10 hover:backdrop-none hover:bg-secondary border border-secondary/20 hover:border-secondary/30 transition-all duration-300">
                          <FaExternalLinkAlt className="text-xl text-foreground/80 group-hover/icon:text-accent transition-colors duration-200" />
                        </div>
                      </Link>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Description */}
              <motion.p
                className="text-foreground/90 mb-6 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 + 1.0 }}
              >
                {about}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 1.2 }}
              >
                {stack.map((tech, techIndex) => (
                  <TechCapsule
                    key={techIndex}
                    index={techIndex}
                    item={tech}
                    delay={index * 0.2 + 1.3 + techIndex * 0.1}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative flex-shrink-0 md:w-[40%]"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-secondary/5 border border-secondary/10 p-2">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={title}
                    width={520}
                    height={400}
                    className="rounded-xl object-cover shadow-lg"
                  />
                </motion.div>

                {/* Image Overlay Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        }
      />
    </div>
  )
}
