import React from 'react'
import Hero from "./components/Hero"
import AboutUs from './components/About'
import FeaturedCars from './components/FeaturedCars'
import Gallery from './components/Gallery'

import MapSection from './components/MapSection'

function Home() {
  return (
    <>
    <Hero/>
    <FeaturedCars/>
    <Gallery/>
    <AboutUs/>
    <MapSection/>
    </>
  )
}

export default Home