import { easeIn, motion } from 'framer-motion'
import React from 'react'

const Heading = ({ first, italic, second}) => {
  return (
    <div>
          <div className="pt-10 sm:pt-0 text-6xl leading-none relative sm:-left-10 text-[#FFC300]">
            {first}
            <motion.span
              className="italic text-7xl leading-none"
              whileHover={{ fontStyle: "normal", scale: "0.9" }}
              transition={{ ease: "easeIn", duration: 0.3 }}
            >
              {italic}
            </motion.span>
            {second}
          </div>
    </div>
  )
}

export default Heading