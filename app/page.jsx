import React from 'react'
import HeroSection from './components/heroSection/HeroSection.jsx'
import About from './components/about/About.jsx'

const page = () => {
  return (
    <main className='bg-background text-text'>
      <HeroSection />
      <About />
    </main>
  )
}

export default page