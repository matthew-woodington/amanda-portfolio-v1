import "./home.css"
import React from 'react'
import HeroImage from '../../assets/images/art-desk.jpg'

function Home() {
  return (
    <div id="home" className='main-section home'>
      {/* <div className="gradient-overlay" /> */}

      <div className="hero-graphic">
        <img className="hero-img" src={HeroImage} alt="" />
        <div class="custom-shape-divider-bottom-1677614710">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      
    </div>
  )
}

export default Home
