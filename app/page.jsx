"use client"

import React from 'react'
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from '@/utils/blobity.config.js';

import HeroSection from './components/heroSection/HeroSection.jsx'
import About from './components/about/About.jsx'
import TeachStack from './components/techstack/Techstack.jsx';


const page = () => {

  const blobity = useBlobity(initialBlobityOptions)

  return (
    <main className='bg-background text-text'>
      <HeroSection />
      <About />
      <TeachStack />
    </main>
  )
}

export default page