"use client"

import { motion, useAnimationControls, useInView } from "framer-motion"
import { useRef } from "react"
import { FaArrowCircleRight } from "react-icons/fa"
import AnimateTitle2 from "../ui/AnimateTitle2"
import Link from "next/link"

const About = () => {
  const controls = useAnimationControls()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleHover = () => {
    controls.start({
      x: 8,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    })
  }

  const handleHoverEnd = () => {
    controls.start({
      x: 0,
      opacity: 0.7,
      transition: { duration: 0.3, ease: "easeOut" },
    })
  }

  const paragraphVariants = {
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
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 1.0,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" ref={ref}>
      <div className="w-full min-h-screen px-2 md:px-10 flex md:flex-row flex-col justify-between md:items-start pb-28 md:pb-0 mb-14 border-b-[2px] border-border relative border-b-foreground/50">
        {/* Enhanced Title with Gradient */}
        <div className="relative">
          <AnimateTitle2 text="ABOUT" italicIndex={2} delay={0.08} />
          {/* <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          /> */}
        </div>

        <div className="sm:w-[70%] relative">
          {/* Animated Paragraphs with Justified Text */}
          <motion.div className="space-y-6" initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.p
              custom={0}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto"
              style={{ textAlignLast: "left" }}
            >
              I'm a frontend web developer, Notion template designer, and web automation builder with over a year of
              experience creating digital solutions that are both visually compelling and functionally powerful.
            </motion.p>

            <motion.p
              custom={1}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto"
              style={{ textAlignLast: "left" }}
            >
              I craft clean, modern websites with thoughtful animations and responsive design — ensuring a smooth,
              engaging user experience. Beyond design, I help businesses, freelancers, and individuals automate
              repetitive tasks through custom web bots and browser-based workflows.
            </motion.p>

            <motion.p
              custom={2}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto"
              style={{ textAlignLast: "left" }}
            >
              Whether it's posting content, scraping data, managing outreach, or sending personalized emails to multiple
              clients at once — I build automation tools that save time, reduce manual work, and keep things running
              efficiently.
            </motion.p>

            <motion.p
              custom={3}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto"
              style={{ textAlignLast: "left" }}
            >
              I also design custom Notion templates to streamline organization and improve productivity — from personal
              use to full business systems.
            </motion.p>

            <motion.p
              custom={4}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto font-medium"
              style={{ textAlignLast: "left" }}
            >
              If you're looking to elevate your digital presence and simplify your workflow, I'd love to help.
            </motion.p>
          </motion.div>

          <Link href="#contact">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-12"
            >
              <motion.button
                className="group relative overflow-hidden text-sm font-semibold px-8 py-2 border-2 border-primary/30 text-secondary-foreground rounded-full bg-gradient-to-r from-secondary to-primary flex gap-3 items-center w-fit shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverEnd}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Button content */}
                <span className="relative z-10 text-background font-medium">Let's Connect</span>

                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={controls}
                  className="relative z-10 text-background"
                >
                  <FaArrowCircleRight className="text-lg" />
                </motion.div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.button>
            </motion.div>
          </Link>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -right-4 top-1/2 w-2 h-48 bg-gradient-to-b from-primary/20 via-secondary/30 to-accent/20 rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          />

          <motion.div
            className="absolute -left-8 bottom-1/4 w-2 h-48 bg-gradient-to-t from-primary/30 to-transparent rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Custom Styles for Better Text Justification */}
      <style jsx>{`
        .text-justify {
          text-align: justify;
          text-justify: inter-word;
        }
        
        @media (max-width: 768px) {
          .text-justify {
            text-align: left;
          }
        }
      `}</style>
    </section>
  )
}

export default About
