import React from 'react'
import Footer from '../Footer'
import Hero from '../Hero'
import Nav from '../Nav'

import PreviousVitopia from '../sections/PreviousVitopia'
import Sponsor_slider from '../Sponsor_slider'

export default function Home() {
  return (
    <>
      <Nav />

      <Hero />
      <PreviousVitopia />
      <Sponsor_slider />
      <Footer />
    </>
  )
}
