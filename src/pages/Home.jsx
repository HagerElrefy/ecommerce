import React from 'react'
import HeroSection from '../components/HeroSection'
import BestSallers from '../components/BestSallers'

export default function Home() {
  return (
    <>
      <section className='mb-20'>
          <HeroSection/>
      </section>
      <section className='mb-20 px-12 md:px-20 lg:px-32'>
          <BestSallers/>
      </section>
    </>
  )
}
