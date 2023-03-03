import "./about.css"
import React from 'react'
import studio from '../../assets/images/art-studio.jpg'
import portrait from '../../assets/images/portrait.jpg'
import abouttext from '../../assets/images/about-text.png'


function About() {
  return (
    <div className='about'>
      <div className="about-media">
        <div className="studio-container">
          <img src={studio} alt="" className="studio" />
        </div>
        <div className="portrait-container">
          <img src={portrait} alt="" className="portrait" />
        </div>
        <div className="overlay-text">
          {/* <span className="cursive-display">About</span>
          <span className="cursive-display line-2">Me</span> */}
          <img src={abouttext} alt="" className="aboutpng" />
        </div>
      </div>
      <div className="about-text">
        <div className="text-header">
          <span className="bg-text">Hello</span>
        </div>
      </div>
    </div>
  )
}

export default About
