"use client"

import { motion } from "framer-motion"

const CircularBackground = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Outermost Circle - Darkest */}
        <motion.circle
          cx="200"
          cy="200"
          r="190"
          className="fill-accent/20 dark:fill-background/40"
          initial={{ r: 0 }}
          animate={{ r: 190 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
        />

        {/* Second Circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          className="fill-secondary/30 dark:fill-primary/50"
          initial={{ r: 0 }}
          animate={{ r: 150 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />

        {/* Third Circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="110"
          className="fill-primary/40 dark:fill-secondary/30"
          initial={{ r: 0 }}
          animate={{ r: 110 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />

        {/* Fourth Circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          className="fill-secondary/50 dark:fill-accent/20"
          initial={{ r: 0 }}
          animate={{ r: 80 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />

        {/* Innermost Circle - Lightest */}
        <motion.circle
          cx="200"
          cy="200"
          r="50"
          className="fill-background/60 dark:fill-foreground/10"
          initial={{ r: 0 }}
          animate={{ r: 50 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />

        {/* Animated Dots for Extra Visual Interest */}
        <motion.circle
          cx="200"
          cy="80"
          r="3"
          className="fill-primary/60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          cx="320"
          cy="200"
          r="2"
          className="fill-secondary/60"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.circle
          cx="200"
          cy="320"
          r="2.5"
          className="fill-accent/60"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.circle
          cx="80"
          cy="200"
          r="2"
          className="fill-primary/40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </motion.svg>
    </div>
  )
}

export default CircularBackground
