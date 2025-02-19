"use client"

import React from 'react'
import HeroSection from './components/heroSection/HeroSection.jsx'
import About from './components/about/About.jsx'
// import { initialBlobityOptions } from "@/utils/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from '@/utils/blobity.config.js';


const page = () => {

  const blobity = useBlobity(initialBlobityOptions)

  return (
    <main className='bg-background text-text'>
      <HeroSection />
      <About />
    </main>
  )
}

export default page