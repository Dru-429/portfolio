import { motion } from 'framer-motion'
import React from 'react'
import { SocialLinks } from './ClipContactPath'

const Contact = () => {

  return (
    <div className='w-full min-h-screen bg-[#F1F1F1]  border-[1px] border-t-zinc-800 rounded-t-3xl mt-0 md:px-10 px-2 py-20' >
        <div className='w-full flex items-center justify-start flex-col'>
            <div className='text-4xl md:text-[5rem] text-zinc-800 uppercase '>
                <span>ha</span>
                <motion.span className='italic text-4xl md:text-[5.4rem]' whileHover={{fontStyle:"normal"}}>V</motion.span>
                e AN IDEA ?
                <div className='text-lg md:text-2xl text-zinc-800 italic tracking-widest -mt-1 md:mt-5'>
                    let's C
                    <motion.span className='text-lg md:text-2xl' whileHover={{fontStyle:"italic"}}>O</motion.span>
                    nnect
                </div>
            </div>
            
            <div className='w-[120%] md:w-[90%] px-10 mt-5'>
                <SocialLinks />
            </div>
        </div>
    </div>
  )
}

export default Contact