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
        {/* Hand-drawn style concentric circles */}

        {/* Outermost Circle - Thickest, using accent color */}
        <motion.path
          d="M 200 50 
             C 280 50, 350 120, 350 200
             C 350 280, 280 350, 200 350
             C 120 350, 50 280, 50 200
             C 50 120, 120 50, 200 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-accent/60 dark:text-accent/40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
        />

        {/* Second Circle - using secondary color */}
        <motion.path
          d="M 200 80
             C 250 80, 320 130, 320 200
             C 320 270, 250 320, 200 320
             C 150 320, 80 270, 80 200
             C 80 130, 150 80, 200 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-secondary/70 dark:text-secondary/50"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Third Circle - using primary color */}
        <motion.path
          d="M 200 120
             C 230 120, 280 150, 280 200
             C 280 250, 230 280, 200 280
             C 170 280, 120 250, 120 200
             C 120 150, 170 120, 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className="text-primary/80 dark:text-primary/60"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
        />

        {/* Innermost Circle - using foreground color */}
        <motion.path
          d="M 200 160
             C 215 160, 240 175, 240 200
             C 240 225, 215 240, 200 240
             C 185 240, 160 225, 160 200
             C 160 175, 185 160, 200 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-foreground/60 dark:text-foreground/40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.1, ease: "easeInOut" }}
        />

        {/* Hand-drawn imperfections - small irregular lines */}
        <motion.path
          d="M 195 55 Q 198 58, 205 55"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-accent/40 dark:text-accent/30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        />

        <motion.path
          d="M 345 195 Q 348 198, 345 205"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-accent/40 dark:text-accent/30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.7, ease: "easeInOut" }}
        />

        <motion.path
          d="M 205 345 Q 198 348, 195 345"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-accent/40 dark:text-accent/30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.9, ease: "easeInOut" }}
        />

        <motion.path
          d="M 55 205 Q 58 198, 55 195"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-accent/40 dark:text-accent/30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.1, ease: "easeInOut" }}
        />

        {/* Subtle hand-drawn texture lines */}
        <motion.path
          d="M 150 100 Q 155 105, 160 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="text-secondary/30 dark:text-secondary/20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.3, ease: "easeInOut" }}
        />

        <motion.path
          d="M 300 150 Q 295 155, 300 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="text-secondary/30 dark:text-secondary/20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
        />

        <motion.path
          d="M 250 300 Q 245 295, 240 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="text-secondary/30 dark:text-secondary/20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.7, ease: "easeInOut" }}
        />

        <motion.path
          d="M 100 250 Q 105 245, 100 240"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="text-secondary/30 dark:text-secondary/20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.9, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  )
}

export default CircularBackground
