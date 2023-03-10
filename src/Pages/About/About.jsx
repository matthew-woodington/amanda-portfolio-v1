import "./about.css"
import React from 'react'
import studio from '../../assets/images/art-studio.jpg'
import portrait from '../../assets/images/portrait.jpg'
import abouttext from '../../assets/images/about-text.png'
import useMediaQuery from '../../hooks/useMediaQuery'


function About() {
  const isBelowLargeScreen = useMediaQuery("(max-width: 1060px)")
  const isSmallScreen = useMediaQuery("(max-width: 480px)")

  return (
    <div id="about" className={!isBelowLargeScreen ? 'about main-page' : 'about mobile main-page'}>
      <div className={isSmallScreen ? (
        'about-media mobile'
      ) : isBelowLargeScreen ? (
        'about-media medium'
      ) : 'about-media'}>
        <div className="studio-container">
          <img src={studio} alt="" className="studio" />
        </div>
        <div className="portrait-container">
          <img src={portrait} alt="" className="portrait" />
        </div>
        <div className="overlay-text">
          <img src={abouttext} alt="" className="aboutpng" />
        </div>
      </div>
      <div className={isSmallScreen ? (
        'about-text mobile'
      ) : isBelowLargeScreen ? (
        'about-text medium'
      ) : 'about-text'}>
        <div className="text-header">
          <div className="bg-text">Hello</div>
          <h1 className="about-title">Im Amanda</h1>
        </div>
        <div className="about-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  )
}

export default About

   