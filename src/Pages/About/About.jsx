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
            <div className="studio-overlay"></div>
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
            <h2 className="about-title">I'm Amanda</h2>
          </div>
          <div className="about-content">
            <p>Currently Florida-based, I was born and raised in the upstate of South Carolina. Starting at a young age, my love for the arts grew through school classes and extracurricular programs. Later attending Clemson University, I cultivated my creative skillset while earning a Bachelors of Science in Marketing with a minor in Visual Arts.</p>
            <p>With an appreciation for details, I find joy in the small moments and strive to bring those moments to life through my work. From drawing, abstract painting, photography, and design, I appreciate special and unseen moments and enjoy sharing them with those around me.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

   