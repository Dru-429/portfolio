"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import useDimension from "./useDimension.jsx";

// Images array
const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
];

const ParallaxScroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const { height } = useDimension();

  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.onChange((latest) => {
  //     console.log('scrollYProgress:', latest);
  //   });

  //   return () => unsubscribe(); // Cleanup the listener when the component unmounts
  // }, [scrollYProgress]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

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
    <div className="my-20 max-w-[99%]">
      <div
        ref={container}
        className="h-[180vh] bg-zinc-950 flex gap-[2vw] box-border p-4 overflow-hidden relative"
      >
        <Column images={[images[0], images[1], images[2]]} y={y1} top="-45%" />
        <Column images={[images[3], images[4], images[5]]} y={y2} top="-95%" />
        <Column images={[images[6], images[7], images[8]]} y={y3} top="-45%" />
        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
          top={"-95%"}
        />
      </div>
    </div>
  );
};

const Column = ({ images, y, top }) => {
  return (
    <motion.div
      className={`w-1/4 h-full flex flex-col gap-2 relative`}
      style={{ y, top }}
    >
      {images.map((src, index) => {
        return (
          <div key={index} className="w-full h-full relative bg-red-800">
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
