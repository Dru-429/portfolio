"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import useDimension from "./useDimension.jsx";

// Images array
const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
];

const ParallaxScroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const { height } = useDimension()

  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.onChange((latest) => {
  //     console.log('scrollYProgress:', latest);
  //   });

  //   return () => unsubscribe(); // Cleanup the listener when the component unmounts
  // }, [scrollYProgress]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])


  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="my-20 ">
      <div
        ref={container}
        className="h-[175vh] bg-zinc-800 flex gap-[2vw] box-border p-4 overflow-hidden first:top-[-45%]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]}  y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </div>
  );
};

const Column = ({ images, y }) => {
  return (
    <motion.div className={`w-1/4 h-full flex flex-col gap-2 relative`} style={{ y }}>
      {images.map((src, index) => {
        return (
          <div key={index} className="w-full h-full relative ">
            <Image
              src={`/images/${src}`}
              alt="images"
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default ParallaxScroll;
