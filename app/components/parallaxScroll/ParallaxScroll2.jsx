"use client"

import React from 'react'

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

const ParallaxScroll2 = () => {

    return (
        <div></div>
    )
  }
  
  

const Column = ({ images }) => {
    return(
        <div>
            {
                images.map( (src, index) => {
                    return (
                        <div key={index}>
                            <Image
                                src={`/images/${src}`}
                                fill
                                alt= "projects image"
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ParallaxScroll2