import React from 'react'
import Nav from '../Nav'
import '../stylev2.css'
import vitap from './../assets/images/vitap.jpeg'
export default function About() {
  return (
    <>
      <Nav />

      <div className="full-500">
        <img className="full-width" alt="Vit-ap drone shot" src={vitap} />
      </div>
      <div className="about-boxing">
        <div className="about-page">
          <h3 className="about-vitap">About VIT-AP</h3>
        </div>
        <p>
          VIT-AP University is a private university located in Amaravati, the
          capital of Andhra Pradesh, India.Foundation stone was laid by former
          chief minister Nara Chandrababu Naidu on November 3,2016 at Ainavolu
          as a part of new education district in the planned capital. The state
          government had allocated 200 acres of land for the VIT University
          campus in Amaravati. It is the first university located in the capital
          region.VIT-AP was established as a sister university of Vellore
          Institute of Technology.The Campus was inaugurated on Nov 28th, 2017
          by Vice president Venkaiah Naidu along with the chief minister opening
          two newly constructed blocks.
        </p>
      </div>
    </>
  )
}
