"use client"

import React from 'react'
// import useBlobity from "blobity/lib/react/useBlobity";
// import { initialBlobityOptions } from '@/utils/blobity.config.js';

import HeroSection from './components/heroSection/HeroSection.jsx'
import About from './components/about/About.jsx'
import TeachStack from './components/techstack/Techstack.jsx';
import Services from './components/servi/Services.jsx';
import ParallaxScroll from './components/parallaxScroll/ParallaxScroll.jsx';
import Contact from './components/contact/Contact.jsx';
import Projects from './components/projects/Projects.jsx';
import Navbar from './components/heroSection/Navbar.jsx';
import Process from './components/process/Process.jsx';


const page = () => {    

  // const blobity = useBlobity(initialBlobityOptions)

  return (
    <main className='bg-background text-foreground relative w-screen box-border overflow-x-hidden'>
      <nav className='w-full flex items-center justify-center fixed top-2 md:top-4 z-50'>
        <div className='w-[98%] md:w-[90%] flex items-center justify-center'>
          <Navbar />
        </div>
      </nav>
      {/*The top div*/}
      <div className='max-w-[95%] xl:max-w-[1223px] w-full mx-auto flex flex-col justify-center'>
        <HeroSection />
        <About />
        <TeachStack />
        <Projects />
        <Services />
        <Process />
      </div>

      {/*The screen size parallax scroll*/} 
      <div className='w-full'>
        <ParallaxScroll />
      </div>

      {/*Footer--Contact & label */}
      <footer className="max-w-[95%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden flex flex-col justify-center">
        <Contact />
      </footer>
    </main>
  )
}

export default page