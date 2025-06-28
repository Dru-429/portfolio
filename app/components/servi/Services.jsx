import React from "react";
import { RevealBento } from "./RevealBento";
import AnimateTitle2 from "../ui/AnimateTitle2";

const Services = () => {
  return (
    <div className="w-full mt-20 py-28 md:pb-32 pb-40 border-t-[2px] border-foreground/30 ">
      <div className="py-20 px-2 sm:px-10 flex flex-col justify-between">
        <div className="w-full relative pb-8 sm:pb-0">
          <AnimateTitle2 
            text="SERVICES" 
            italicIndex={3} 
            delay={0.05}
          />
        </div>

        <div className="w-full p-6 mt-10 backdrop-blur-xl bg-secondary/10 hover:bg-secondary/15 border border-secondary/20 hover:border-secondary/30 rounded-2xl shadow-xl hover:shadow-2xl flex flex-col-reverse justify-between items-center gap-10 md:flex-row transition-all duration-500">
          <RevealBento />
        </div>
      </div>
    </div>
  );
};

export default Services;
