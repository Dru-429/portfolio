import React from "react";
import Header from "./Header";
import { easeIn, motion } from "framer-motion";
import Heading from "../../components/Heading";

const HeroSection = () => {
  
  // 'midnight': '#000814',
  // 'deep-navy': '#001D3D',
  // 'ocean-blue': '#003566',
  // 'golden-yellow': '#FFC300',
  // 'sun-yellow': '#FFD60A',

  return (
    <div className="w-full min-h-screen flex-between pt-5">
      <Header />
      <div className="mt-40 mb-52 sm:mb-0 mx-2 sm:mx-10 sm:w-1/2">
        <div className="sm:flex justify-between items-start leading-none tracking-tighter relative">

          <span className="text-lg px-1 relative top-3 text-[#FFD60A]">
            Dhruv Sahoo
          </span>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: easeIn }}
            className="h-[2px] bg-[#FFD60A] sm:w-[18%] w-28 absolute top-9 left-1"
          ></motion.div>

          <Heading 
            first={"Web Devel"}
            italic={"o"}
            second={"per"}
          />

        </div>

        <span className="text-4xl sm:text-6xl text-[#FFC300] pt-8">
          & Creative Designer
        </span>

        <p className="mt-7 w-[95%] text-[#000814] tracking-tight text-lg">
          Crafting captivating digital experiences and designing websites that
          leave a lasting impression. By Building beautiful, functional
          frontends.
        </p>

      </div>
      <div className="border-t-[1px] mt-24 border-black">
        <div className="mx-2 sm:mx-10 py-5 text-sm text-zinc-600">
          <h3>Email:</h3>
          <p>contact.dhruvsahoo@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
