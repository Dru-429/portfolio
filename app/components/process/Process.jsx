"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa"

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const processSteps = [
    {
      number: "1",
      title: "Discover Your Vision",
      description:
        "We start by understanding your goals and aspirations, style preferences, and specific needs — from websites to automations.",
      icon: <FaLightbulb />,
      color: "from-primary/20 to-primary/10",
      delay: 0.2,
    },
    {
      number: "2",
      title: "Strategize & Design",
      description: "I craft clean blue prints, designs, workflows, or bot plans that align with your vision and business needs.",
      icon: <FaPencilRuler />,
      color: "from-primary/20 to-primary/10",
      delay: 0.4,
    },
    {
      number: "3",
      title: "Build Automate & Bring It to Life",
      description: "I build your digital solution with care and dedication focused on delivering smooth functionality and reliable performance that truly works for you.",
      icon: <FaCode />,
      color: "from-accent/20 to-accent/10",
      delay: 0.6,
    },
    {
      number: "4",
      title: "Launch & Evolve .",
      description:
        "Once live, I provide support, optimizations, or tweaks as needed — so everything works exactly as you want.",
      icon: <FaRocket />,
      color: "from-accent/20 to-accent/10",
      delay: 0.8,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  return (
    <section className="w-full pb-44 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container with Liquid Glass Effect */}
        <motion.div
          className="relative backdrop-blur-xl bg-secondary/10 border border-secondary/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={
            isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.9, filter: "blur(20px)" }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(136,189,242,0.1) 0%, rgba(22,68,111,0.05) 50%, rgba(7,34,59,0.1) 100%)",
                "linear-gradient(135deg, rgba(7,34,59,0.1) 0%, rgba(136,189,242,0.1) 50%, rgba(22,68,111,0.05) 100%)",
                "linear-gradient(135deg, rgba(22,68,111,0.05) 0%, rgba(7,34,59,0.1) 50%, rgba(136,189,242,0.1) 100%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              repeatDelay: 5,
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title and Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                   Bringing Your Vision to Life{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  </span>
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl text-foreground/80 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Here's how I help bring your project to life — simple, clear, effective.
                </motion.p>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Process Steps */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="group relative overflow-hidden backdrop-blur-md bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-2xl p-6 transition-all duration-500"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Step Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    initial={{ scale: 0.8, rotate: -5 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step Number and Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className="text-4xl md:text-5xl font-bold text-primary group-hover:text-secondary transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.number}
                      </motion.div>

                      <motion.div
                        className="text-2xl text-foreground/60 group-hover:text-foreground transition-colors duration-300"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    {/* Step Title */}
                    <motion.h3
                      className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: step.delay + 0.2 }}
                    >
                      {step.title}
                    </motion.h3>

                    {/* Step Description */}
                    <motion.p
                      className="text-sm md:text-base text-foreground/70 group-hover:text-foreground/90 leading-relaxed transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: step.delay + 0.4 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Floating Particle */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Connecting Line */}
          <motion.div
            className="absolute bottom-2 md:bottom-7 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "8rem" } : { width: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Process
