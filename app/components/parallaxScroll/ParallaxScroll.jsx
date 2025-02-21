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
  const Column = ({ setImages, y }) => {
    return (
      <motion.div
        className="w-full sm:min-w-[250px] h-full flex flex-col gap-[1vw] relative"
        style={{ y }}
      >
        {setImages.map((item, index) => {
          const currImage = "/images/" + item;
          return (
            <div key={index} className="w-full h-1/3 relative rounded-xl">
              <Image
                src={currImage}
                alt="project image"
                className="object-cover w-full h-full"
                fill
              />
            </div>
          );
        })}
      </motion.div>
    );
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const { height } = useDimension();

  // Adding lenis scroll and requesting animation frame
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  // Setting different scroll values (Y) for different columns
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  const my2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const my3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const my4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.75]);

  return (
    <div>
      {/* Desktop view */}
      <div
  className="flex w-full h-[75vh] md:h-[200vh] bg-zinc-800 gap-[1vw] p-[vh] box-border pb-[5vh] overflow-y-scroll mb-40"
  ref={container}
>
  <div className="w-1/4">
    <Column setImages={[images[0], images[1], images[2]]} y={y1} />
  </div>
  <div className="w-1/4">
    <Column setImages={[images[3], images[4], images[5]]} y={y2} />
  </div>
  <div className="w-1/4">
    <Column setImages={[images[6], images[7], images[8]]} y={y3} />
  </div>
  <div className="w-1/4">
    <Column setImages={[images[9], images[10], images[11]]} y={y4} />
  </div>
</div>


      {/* Mobile view */}
      <div
        className="w-full h-[80vh] md:h-[80vh] bg-zinc-800 flex md:hidden gap-[1vw] p-[vw] box-border pb-[5vw] overflow-y-scroll"
        ref={container}
      >
        <div className="w-1/3 md:w-1/4 relative top-[-195%]">
          <Column setImages={[images[3], images[4], images[5]]} y={my2} />
          <Column setImages={[images[3], images[4], images[5]]} y={my2} />
          <Column setImages={[images[3], images[4], images[5]]} y={my2} />
        </div>
        <div className="w-1/3 md:w-1/4 relative top-[-145%]">
          <Column setImages={[images[6], images[7], images[8]]} y={my3} />
          <Column setImages={[images[6], images[7], images[8]]} y={my3} />
          <Column setImages={[images[6], images[7], images[8]]} y={my3} />
        </div>
        <div className="w-1/3 md:w-1/4 relative top-[-175%]">
          <Column setImages={[images[9], images[10], images[11]]} y={my4} />
          <Column setImages={[images[9], images[10], images[11]]} y={my4} />
          <Column setImages={[images[9], images[10], images[11]]} y={my4} />
        </div>
      </div>
    </div>
  );
};

export default ParallaxScroll;
