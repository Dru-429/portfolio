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
// import Projects from './components/projects/Projects.jsx';


const page = () => {

  // const blobity = useBlobity(initialBlobityOptions)

  return (
    <main className='bg-background text-text'>
      <HeroSection />
      <About />
      <TeachStack />
      {/* <Projects /> */}
      <Services />
      {/* <ParallaxScroll /> */}
      <Contact />
    </main>
  )
}

export default page