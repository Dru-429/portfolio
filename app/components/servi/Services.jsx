import React from "react";
import { RevealBento } from "./RevealBento";
import AnimateTitle2 from "../ui/AnimateTitle2";

const Services = () => {
  return (
    <div className="w-full py-20 md:pb-32 pb-40 -mt-1">
      <div className="border-t-[1px] border-text py-20 px-2 sm:px-10 flex flex-col justify-between">
        <div className="w-full relative pb-8 sm:pb-0">
          <AnimateTitle2 
            text="SERVICES" 
            italicIndex={3} 
            delay={0.05}
          />
        </div>

        <div className="w-full ">
          <RevealBento />
        </div>
      </div>
    </div>
  );
};

export default Services;
