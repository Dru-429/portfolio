import React, { useEffect, useRef, useState } from "react";
import { delay, easeIn, easeInOut, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { SiNotion } from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";
import Eyes from "./Eyes";

export const RevealBento = () => {
    return (
        <div className="bg-[#8EDCF6] mt-10  text-zinc-50 ">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid w-full grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <NotionListBlock />
                <SocialsBlock />
                <LocationBlock />
            </motion.div>
        </div>
    );
};

const Block = ({ className, ...rest }) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-6 row-span-2 md:col-span-6 relative">

        <div className="absolute md:right-4 md:top-[30%] right-[20%] top-[38%]">
            <Eyes />
        </div>
        <h1 className=" text-lg font-medium leading-tight">
            Things i can help you with:{" "}
            <span className="text-zinc-400 text-xs md:text-lg block relative md:-bottom-20 -bottom-24" >
                Think. Design.
                Develop. Launch.
            </span>
        </h1>
    </Block>
);

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                // rotate: "1.5deg",
                scale: 1.1,
                backgroundColor: "#000000",
            }}
            transition={{ duration: 0.2, ease: easeIn }}
            className="col-span-6 md:col-span-3 bg-zinc-800 text-zinc-100 
        bg-contain 
        bg-no-repeat 
        bg-right 
        hover:bg-[url('https://skfreelancers.com/wp-content/uploads/2021/03/graphicdesign.png')]"
        >
            <div
                className="text-2xl font-bold z-10 opacity-90 flex flex-col md:flex-row  gap-1 md:justify-start justify-center items-center  "
            >
                <div>Digital</div>
                <div>Desgin</div>
            </div>
        </Block>

        <Block
            whileHover={{
                // rotate: "-2.5deg",
                scale: 1.1,
                backgroundColor: "#0A0A0A",
            }}
            transition={{ duration: 0.2, ease: easeIn }}
            className="col-span-6 bg-zinc-800 text-xl md:col-span-3 bg-contain text-zinc-100 bg-no-repeat  bg-right-bottom
                       hover:bg-[url('https://gashwatechnologies.com/images/dynamic_web_designing_himachal_shimla.gif')]
            "
        >
            <div
                href="#"
                className="grid h-full place-content-center md:place-content-left text-2xl opacity-90 font-semibold z-0"
            >
                Web Dev
            </div>
        </Block>

        <Block
            whileHover={{
                // rotate: "-2.5deg",
                scale: 1.1,
                backgroundColor: "#0A0A0A",
            }}
            transition={{ duration: 0.2, ease: easeIn }}
            className="col-span-6 md:col-span-6 bg-zinc-800 text-2xl text-zinc-100 opacity-90 font-semibold bg-contain bg-no-repeat bg-right 
                       hover:bg-[url('https://www.innovination.com/wp-content/uploads/2021/06/develpoment.gif')]
            "
        >
            <div
                className="flex justify-center items-center h-full text-2xl col"
            >
                Responsive Design
            </div>
        </Block>
    </>
);


const LocationBlock = () => {

    // const ref = useRef();
    // const [position, setPosition] = useState({ x: 0, y: 0 })

    // const handleMouseMove = (e) => {
    //     const { clientX, clientY } = e;
    //     const { height, width, left, top } = ref.current.getBoundingClientRect();
    //     const x = clientX - (left - width / 2);
    //     const y = clientY - (top + height / 2);
    //     setPosition({ x, y });
    // };

    // const handleMouseLeave = () => {
    //     setPosition({
    //         x: 0, y: 0
    //     });
    // };
    // if (ref.current) {

    //     ref.current.addEventListener('mousemove', handleMouseMove);
    //     ref.current.addEventListener('mouseleave', handleMouseLeave);

    //     return () => {
    //         ref.current.removeEventListener('mousemove', handleMouseMove);

    //         ref.current.removeEventListener('mouseleave', handleMouseLeave);
    //     };
    // }

    // const { x, y } = position
    // console.log(x, y)

    return (
        <Block
            whileHover={{
                // rotate: "-2.5deg",
                scale: 1.1,
                backgroundColor: "#0A0A0A",
            }}
            // ref={ref}

            className="col-span-6 flex flex-row md:flex-col items-center gap-4 md:col-span-3 text-zinc-100 "
        >
            <motion.div
                className="-rotate-90 text-xs md:text-2xl w-full relative -top-28 hidden md:visible"
                // onMouseMove={handleMouseMove}
                // onMouseLeave={handleMouseLeave}
                // initial= {{ x:0, y:0}}
                // animate={{ x: x, y: y }}
            >
                < BsCursorFill />
            </motion.div>
            <p className="text-center text-2xl font-semibold ">Interaction Design</p>
        </Block>
    )
};

const NotionListBlock = () => (


    <Block
        whileHover={{
            // rotate: "-2.5deg",
            scale: 1.05,
            backgroundColor: "#0A0A0A",
        }}
        transition={{ duration: 0.2, ease: easeIn }}
        className="col-span-12 md:col-span-9 flex items-center bg-zinc-800 text-2xl text-zinc-100 opacity-90 font-semibold bg-contain bg-no-repeat bg-right 
        hover:bg-[url('https://lh5.googleusercontent.com/proxy/pPMvV7_tQBcG9EhYe_YKTbjSMpKxtqbmpoP56o_F_0CdfLDdt95ntRwJK9eXhyT6bcCHL0rDCCOrIkFuOsH747KUW9u1lnssvZjF5Y3d')]"
    >
        <p className="mb-3 text-2xl font-semibold flex items-center justify-center w-full gap-2">
            <span className="text-2xl "> <SiNotion /> </span>
            Bulding Notion Templates
        </p>

    </Block>
);
