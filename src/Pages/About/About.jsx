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
            <h2 className="about-title">I'm Amanda</h2>
          </div>
          <div className="about-content">
            <p>Florida-based artist, Amanda Royaards, was born and raised in the upstate of South Carolina. Coming from an artistic family and starting at a young age, Amanda's love for the arts grew through school classes and extracurricular programs. Amanda later attended Clemson University, where she earned a Bachelors of Science in Marketing with a minor in Visual Arts. During her time at Clemson, the artist enjoyed art history, drawing, and painting courses, further cultivating her creative skillset. Inspired by the world around her, Amanda finds the most peace and enjoyment when spending time in creation, specifically at the beach, watching a sunset, hiking through the Carolina mountains, or traveling to a new place. With an appreciation for details, the artist finds joy in the small moments and strives to bring those moments to life through her work. Through drawing, abstract painting, and photography, Amanda captures special and unseen moments and enjoys sharing them, reflected through her work, with those around her.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

   