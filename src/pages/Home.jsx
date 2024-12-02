import React from 'react'
import HeroSection from '../components/HeroSection'
import BestSallers from '../components/BestSallers'

export default function Home() {
  return (
    <>
      <section className='mb-20'>
          <HeroSection/>
      </section>
      <section>
          <BestSallers/>
      </section>
    </>
  )
}
