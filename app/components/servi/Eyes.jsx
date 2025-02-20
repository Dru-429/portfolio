import React from 'react'
import { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate,setRotate] = useState(0) 

    useEffect( () => {
        window.addEventListener("mousemove", (e)=> {
            let mouseX  = e.clientX
            let mouseY  = e.clientY

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaX, deltaY) * (180/Math.PI)
            setRotate(180-angle)
        })
    },[])
    
    return (
        <div className='eyes w-48 h-20 overflow-hidden'>

            <div 
                data-scroll data-scroll-speed="-.7" 
                className='w-full h-full relative'
            >

                <div 
                    data-scroll data-scroll-speed="0.7" 
                    className='absolute top-1/3 left-1/3 -translate-y-[50%] flex gap-10 '
                >

                    <div className='w-10 h-10 bg-zinc-100 rounded-full flex justify-center items-center'>

                        <div 
                            style={{transformOrigin: '55% 55%' , transform: `rotate(${rotate}deg)`}} 
                            className='w-2/3 h-2/3 bg-zinc-900 rounded-full flex justify-center'
                        >
                            <div className='w-1/5 h-1/5 bg-zinc-100 rounded-full'></div>
                        </div>

                    </div>

                    <div className='w-10 h-10 bg-zinc-100 rounded-full flex justify-center items-center'>
                        
                        <div 
                            style={{transformOrigin: '55% 55%' , transform: `rotate(${rotate}deg)`}} 
                            className='w-2/3 h-2/3 bg-zinc-900 rounded-full flex justify-center'
                        >
                            <div className='w-1/5 h-1/5 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Eyes