"use client"

import { motion } from 'framer-motion'
import React from 'react'

const ParallaxScroll = () => {

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
    ]
 

    const Column = ({ setImages, y = 0 }) => {
        return (
            <motion.div
                className='w-full sm:min-w-[250px] h-full flex flex-col gap-[1vw] relative '
                style={{ y }}
            >
                {
                    setImages.map((item, index) => {

                        const currImage = "/images/" + item

                        return (
                            <div
                                key={index}
                                className='w-full h-1/3 relative rounded-xl '
                            >
                                <img src={currImage} alt="project image" className='object-cover w-full h-full' />
                            </div>
                        )
                    })
                }
            </motion.div>
        )
    }


  return (
    <div>
    <div
        className='hidden md:flex w-full h-[80vh] md:h-[200vh] bg-zinc-800 gap-[1vw] p-[vw] box-border pb-[5vw] overflow-hidden'
        // ref={container}
    >
        <div className='w-1/4 relative top-[-45%]'>
            <Column setImages={[images[0], images[1], images[2]]}  />
        </div>
        <div className='w-1/4 relative top-[-95%]'>
            <Column setImages={[images[3], images[4], images[5]]}  />
        </div>
        <div className='w-1/4 relative top-[-45%]'>
            <Column setImages={[images[6], images[7], images[8]]} />
        </div>
        <div className='w-1/4 relative top-[-75%]'>
            <Column setImages={[images[9], images[10], images[11]]} />
        </div>
    </div>

    {/* //Responsive for mobiles  */}
    {/* <div
        className='w-full h-[80vh] md:h-[200vh] bg-zinc-800 flex md:hidden gap-[1vw] p-[vw] box-border pb-[5vw] overflow-hidden'
        ref={container}
    >
        <div className='w-1/3 md:w-1/4 relative top-[-195%]'>
            <Column setImages={[images[3], images[4], images[5]]} y={my2}  />
            <Column setImages={[images[3], images[4], images[5]]} y={my2} />
            <Column setImages={[images[3], images[4], images[5]]} y={my2} />
        </div>
        <div className='w-1/3 md:w-1/4 relative top-[-145%]'>
            <Column setImages={[images[6], images[7], images[8]]} y={my3} />
            <Column setImages={[images[6], images[7], images[8]]} y={my3} />
            <Column setImages={[images[6], images[7], images[8]]} y={my3} />
        </div>
        <div className='w-1/3 md:w-1/4 relative top-[-175%]'>
            <Column setImages={[images[9], images[10], images[11]]} y={my4} />
            <Column setImages={[images[9], images[10], images[11]]} y={my4} />
            <Column setImages={[images[9], images[10], images[11]]} y={my4} />
        </div>
    </div> */}
</div>

  )
}

export default ParallaxScroll