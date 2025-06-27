import { delay, easeIn, easeInOut, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { SiNotion } from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";
import Eyes from "./Eyes.jsx";

export const RevealBento = () => {
  return (
    <div className="mt-10  text-background ">
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
        <BottomBlock />
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
        "col-span-4 rounded-2xl border border-secondary bg-secondary p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-6 row-span-2 md:col-span-6 relative">
    <div className="absolute md:right-4 md:top-[30%] right-[15%] bottom-[10%]">
      <Eyes />
    </div>
    <h1 className=" md:text-2xl text-xl font-bold leading-tight text-background">
      Things i can help you with:{" "}
      <span className="text-accent-foreground text-xs md:text-lg md:block relative hidden m md:-bottom-20">
        Think. Design. Built. Launch. Automate.
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
        backgroundColor: "#FCBF49",
      }}
      transition={{ duration: 0.2, ease: easeIn }}
      className="col-span-6 md:col-span-3 bg-accent
        bg-contain 
        bg-no-repeat 
        bg-right 
        hover:bg-[url('https://skfreelancers.com/wp-content/uploads/2021/03/graphicdesign.png')]"
    >
      <div className="text-2xl font-bold z-10 opacity-90 flex flex-col md:flex-row  gap-1 md:justify-start justify-center items-center  text-background ">
        <div>Digital</div>
        <div>Desgin</div>
      </div>
    </Block>

    <Block
      whileHover={{
        // rotate: "-2.5deg",
        scale: 1.1,
        backgroundColor: "#EAE2B7",
      }}
      transition={{ duration: 0.2, ease: easeIn }}
      className="text-background bg-primary col-span-6 text-xl md:col-span-3 bg-contain bg-no-repeat  bg-right-bottom
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
        backgroundColor: "#FCBF49",
      }}
      transition={{ duration: 0.2, ease: easeIn }}
      className="col-span-6 md:col-span-6 bg-accent text-2xl text-background opacity-90 font-semibold bg-contain bg-no-repeat bg-right 
                       hover:bg-[url('https://www.innovination.com/wp-content/uploads/2021/06/develpoment.gif')]
            "
    >
      <div className="flex justify-center items-center h-full text-2xl col">
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
        backgroundColor: "#F77F00",
      }}
      // ref={ref}

      className="col-span-6 flex flex-row md:flex-col items-center gap-4 md:col-span-3 bg-secondary text-background "
    >
      <p className="mb-3 text-2xl font-semibold flex items-center justify-center w-full gap-2">
        <span className="text-2xl ">
          {" "}
          <SiNotion />{" "}
        </span>
        Bulding Notion Templates
      </p>
    </Block>
  );
};

const BottomBlock = () => (
  <Block className="md:hidden visible col-span-12 flex items-center bg-text text-2xl text-background font-semibold">
    <p className=" text-xl tracking-tighter font-semibold flex items-center justify-center w-full gap-2">
      Think. Design. Built. Launch. Automate.
    </p>
  </Block>
);
const NotionListBlock = () => (
  <Block
    whileHover={{
      // rotate: "-2.5deg",
      scale: 1.05,
    }}
    transition={{ duration: 0.2, ease: easeIn }}
    className="col-span-12 md:col-span-9 flex items-center bg-foreground text-background hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-2xl opacity-90 font-semibold bg-contain bg-no-repeat bg-right 
        hover:bg-[url('https://lh5.googleusercontent.com/proxy/pPMvV7_tQBcG9EhYe_YKTbjSMpKxtqbmpoP56o_F_0CdfLDdt95ntRwJK9eXhyT6bcCHL0rDCCOrIkFuOsH747KUW9u1lnssvZjF5Y3d')]"
  >
    <p className="mb-3 text-2xl font-semibold flex items-center justify-center w-full gap-2">
      <span className="text-2xl ">
        {" "}
        <SiNotion />{" "}
      </span>
      Bulding Notion Templates
    </p>
  </Block>
);