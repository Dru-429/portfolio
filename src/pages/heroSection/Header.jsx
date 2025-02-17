import { color, easeIn, motion } from 'framer-motion'
import React from 'react'

const Header = () => {

    return (
        <div className='flex items-center justify-between py-4 sm:px-7 sm:py-2 box-border sticky sm:relative' >

            <div>
                <span className='text-[#FFD60A]  sm:text-3xl text-2xl leading-none italic gajraj-one-regular sm:px-2 px-2 sm:pr-2'>dru</span>
                <span className='text-xl leading-none tracking-tighter '>Dhruv Sahoo</span>
            </div>

            <div className='sm:w-[45%] w-[25%] flex items-center justify-between tracking-tighter leading-none pr-2 relative'>
                <div className='hidden sm:flex gap-10'  >
                    {[["Home", "a"], ["About", "a"], ["Project", "a"]].map((item, index) => (
                        <motion.a
                            href={item[1]}
                            className='border-[1px] w-[90px] rounded-2xl box-border px-3 py-2 border-[#FFC300] text-[#FFC300] flex items-center justify-center' key={index}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.01, backgroundColor: "#FFC300", color: "#000814" }}
                            whileFocus={{ backgroundColor: "#FFC300", color: "#000814" }}
                            transition={{ ease: easeIn, duration: 0.3 }}
                        > {item[0]} </motion.a>
                    ))}
                </div>
                <div className='px-4 py-2 text-transparent hidden sm:visible'></div>

                <a href="" className='text-[#000814] bg-[#FFC300] border-[1px] px-4 py-2 border-[#FFD60A] rounded-2xl absolute hover:scale-105 hover:font-semibold right-0 hover:bg-[#FFD60A] '>
                    Contact
                </a>

            </div>
        </div>
    )
}

export default Header