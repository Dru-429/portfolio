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
  return (
    <div className="my-20 ">
      <div className="h-[175vh] bg-zinc-800 flex gap-[2vw] box-border p-4">
        <Column images={ [images[0], images[1], images[2] ] } />
        <Column images={ [images[3], images[4], images[5] ] } />
        <Column images={ [images[6], images[7], images[8] ] } />
        <Column images={ [images[9], images[10], images[11] ] } />
      </div>
    </div>
  )
}

const Column = ({images}) => {
  return(
    <div className=" w-1/4  h-full flex flex-col gap-2">
      {
        images.map( (src, index)=> {
          return (
            <div key={index} className="w-full h-full relative" >
              <Image
                src={`/images/${src}`}
                alt="images"
                fill
              />
            </div>
          )
        } )
      }
    </div>
  )
}

export default ParallaxScroll