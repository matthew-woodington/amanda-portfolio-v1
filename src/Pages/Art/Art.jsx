import "./art.css"
import React, { useEffect, useRef, useState } from 'react'
import art1 from '../../assets/images/art1.jpeg'
import art2 from '../../assets/images/art2.jpeg'
import art3 from '../../assets/images/art3.jpeg'
import art4 from '../../assets/images/art4.jpeg'

const ART_LIST = [
  {
    number: '01',
    title: 'Art One',
    description: 'One Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: art1,

  },
  {
    number: '02',
    title: 'Art Two',
    description: 'Two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: art2,

  },
  {
    number: '03',
    title: 'Art Three',
    description: 'Three Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: art3,

  },
  {
    number: '04',
    title: 'Art Four',
    description: 'Four Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: art4,

  }
]

function Art() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [display, setDisplay] = useState(ART_LIST[activeIndex])
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setDisplay(ART_LIST[activeIndex])
  }, [activeIndex])

  const changeDisplay = (index) => {
    if (index == activeIndex) {
      return
    }

    const previous = activeIndex
    const activeBtn = document.getElementById(`dispbtn ${index}`)
    const previousBtn = document.getElementById(`dispbtn ${previous}`)

    activeBtn.classList.add('active')
    previousBtn.classList.remove('active')

    setAnimate(true)
    setTimeout(updateDisplayInfo, 600, index)
  }

  const updateDisplayInfo = (index) => {
    setAnimate(false)

    setActiveIndex(index)
  }

  return (
    <div id='art' className='art'>

      <div className="art-intro">
        <div class="top-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>
        <h1 className="intro-title">Art</h1>
        <h2 className="intro-subtitle">What I Do</h2>
      </div>

      <section className="display-section">
        <div className={animate ? "art-display animate" : "art-display"}>
          <div className="img-container">
            <img src={display.image} alt="artwork" className="display-img" />
            <h2 className="display-title">{display.title}</h2>
          </div>
          <div className="info-container">
            <p className="info-text">{display.description}</p>
            <span className="info-number">{display.number}</span>
          </div>
          <div className="display-buttons">
            <button id="dispbtn 0" className="toggle-btn active" onClick={() => changeDisplay(0)}><div className="btn-icon" /></button>
            <button id="dispbtn 1" className="toggle-btn" onClick={() => changeDisplay(1)}><div className="btn-icon" /></button>
            <button id="dispbtn 2" className="toggle-btn" onClick={() => changeDisplay(2)}><div className="btn-icon" /></button>
            <button id="dispbtn 3" className="toggle-btn" onClick={() => changeDisplay(3)}><div className="btn-icon" /></button>
          </div>
        </div>
      </section>

      <div className="art-outro">
        <div class="bottom-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default Art
