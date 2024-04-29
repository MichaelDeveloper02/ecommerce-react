import React from 'react'
import Navbar from "./navbar"
function Hero() {
  return (
    <section className='section-hero'>
      <Navbar/>

      <div className='hero-container'>

        <div className='text-hero-container hero-item'>
          <div className='text-hero'>
            <p >E-commerce</p>
            <h1>YOUR E-COMMERCE</h1>
            <p className='tittle-subtitule'>Explore, Inspire, and Shop at Our Virtual Marketplace.
            </p>
          </div>
          <div className='buttons-hero'> 
            <a className='btn-base btn-principal-hero' href="">SHOP NOW</a>
            <a className='btn-base btn-secundary-hero' href="">READ MORE</a>
          </div>
        </div>

        <div className='container-img hero-item'>
          <img src="../../public/img/hero-img4.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero