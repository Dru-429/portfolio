import { motion } from 'framer-motion'
import React from 'react'
import { SocialLinks } from './ClipContactPath'

const Contact = () => {

  return (
    <div id='contact' className='w-full max-h-screen border-[2px] border-secondary/50 mt-40 md:px-10 px-2 py-20 mb-20 backdrop-blur-xl bg-primary/20 rounded-3xl' >
        <div className='w-full flex items-center justify-start flex-col'>
            <div className='text-4xl md:text-7xl sm:font-bold text-secondary/80 uppercase mb-10'>
                <span>ha</span>
                <motion.span className='italic text-4xl md:text-[5.4rem]' whileHover={{fontStyle:"normal"}}>V</motion.span>
                e AN IDEA ?
                <div className='text-lg md:text-2xl italic tracking-widest -mt-3 md:mt-1 bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text'>
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