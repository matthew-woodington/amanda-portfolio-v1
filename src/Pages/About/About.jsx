import "./about.css"
import React from 'react'
import portfolio1 from '../../assets/images/amandaswebsite/portfolio1.jpg'
import studio from '../../assets/images/amandaswebsite/standing-w-painting.jpg'
import abouttext from '../../assets/images/about-text.png'



function About() {
  return (
    <div id="about" className="about main-page">
      <div className="about-container">
        <div className='about-media'>
          <div className="studio-container">
            <div className="overlay"></div>
            <img src={studio} alt="" className="studio" />
          </div>
          <div className="portrait-container">
            <img src={portfolio1} alt="" className="portrait" />
          </div>
          <div className="overlay-text">
            <img src={abouttext} alt="" className="aboutpng" />
          </div>
        </div>
        <div className='about-text'>
          <div className="text-header">
            <h1 className="bg-text">Hello</h1>
            <h2 className="about-title">Im Amanda</h2>
          </div>
          <div className="about-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

   