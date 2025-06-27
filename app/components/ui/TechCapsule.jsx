"use client"

import { motion } from "framer-motion"

const TechCapsule = ({ item, index, delay = 0 }) => {
  const capsuleVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: delay,
      },
    },
  }

  return (
    <motion.div
      variants={capsuleVariants}
      initial="hidden"
      animate="visible"
      className="group relative overflow-hidden backdrop-blur-md bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 hover:border-secondary/30 rounded-full px-4 py-2 transition-all duration-300 cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
        initial={{ rotate: -180 }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        <motion.div
          className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {item[1]}
        </motion.div>
        <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
          {item[0]}
        </span>
      </div>

      {/* Pulsing Dot */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

export default TechCapsule
