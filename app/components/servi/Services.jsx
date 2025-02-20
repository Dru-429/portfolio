import { easeInOut, easeOut, motion, useAnimationControls, useInView, useScroll } from 'framer-motion'
import { easeIn } from 'framer-motion/dom';
import React, { useRef } from 'react'
import { RevealBento } from './RevealBento';


const Services = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className='w-full bg-[#8EDCF6] py-20 md:pb-32 pb-40 -mt-1'>
      <div className='border-t-[1px] border-zinc-800 py-20 px-2 sm:px-10 flex flex-col justify-between'>

        <div className='w-full relative pb-8 sm:pb-0'>
          <div ref={ref} className='absolute top-20 w-10 h-10 '></div>
          <h1 className='h-[4rem] overflow-y-hidden overflow-hidden relative '>
            {isInView &&
              "SERVICES".split("").map((item, index) => {
                if (index == 3) {
                  return (
                    <motion.span
                      className="text-[3.45rem] text-zinc-800 italic relative"
                      whileHover={{ fontSize: 60, fontStyle: "normal" }}
                      initial={{ bottom: "-100%", }}
                      animate={{ bottom: "0" }}
                      transition={{ duration:0.2, ease: easeOut, delay: index * 0.1 }}
                    >
                      {item}
                    </motion.span>
                  )
                }
                else {
                  return (
                    <motion.span
                      className='text-5xl text-zinc-800 relative'
                      initial={{ bottom: "-100%", }}
                      animate={{ bottom: "0" }}
                      transition={{duration:0.2, ease: easeOut, delay: index * 0.07 }}
                    >
                      {item}
                    </motion.span>
                  )
                }
              })
            }
          </h1>
        </div>

        <div className='w-full '>
          <RevealBento />
        </div>
      </div>
    </div>
  )
}

export default Services