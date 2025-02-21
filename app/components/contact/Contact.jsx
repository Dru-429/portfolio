import { motion } from 'framer-motion'
import React from 'react'
import { SocialLinks } from './ClipContactPath'

const Contact = () => {

  return (
    <div className='w-full min-h-screen border-[1px] border-t-secondary border-accent rounded-t-3xl mt-0 md:px-10 px-2 py-20' >
        <div className='w-full flex items-center justify-start flex-col'>
            <div className='text-4xl md:text-[5rem] text-primary uppercase mb-10'>
                <span>ha</span>
                <motion.span className='italic text-4xl md:text-[5.4rem]' whileHover={{fontStyle:"normal"}}>V</motion.span>
                e AN IDEA ?
                <div className='text-lg md:text-2xl italic tracking-widest -mt-1 md:mt-5 bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text'>
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