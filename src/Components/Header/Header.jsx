import "./header.css"
import React, { useEffect, useState } from 'react'
// import HeroIcon from "../../assets/images/HeroIcon.jpg"
import useMediaQuery from "../../hooks/useMediaQuery"
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiLinkedin} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'


function Header() {
  const isBelowLargeScreen = useMediaQuery("(max-width: 1060px)")

  const [menuToggle, setMenuToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const changeNavBar = () => {
    if(window.scrollY >= 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBar);
    return () => {
      window.removeEventListener('scroll', changeNavBar)
    }
  }, [])

  return (
    <div className={!scrolled ? "navbar" : 'navbar scrolled'}>

      {!isBelowLargeScreen ? (
        <>
          <ul className="socials">
            <li className="social-item">
              <a className="link" href="https://www.instagram.com/mandy_designs_/" target='_blank' rel="noreferrer"><FiInstagram /></a>
            </li>
            <li className="social-item">
              <a className="link" href="https://www.facebook.com/profile.php?id=100013426179504&mibextid=LQQJ4d" target='_blank' rel="noreferrer"><FiFacebook /></a>
            </li>
            <li className="social-item">
              <a className="link" href="https://www.linkedin.com/in/amandaroyaards/" target='_blank' rel="noreferrer"><FiLinkedin /></a>
            </li>
            <li className="social-item">
              <a className="link" href="mailto:royaardsam@gmail.com"><FiMail /></a>
            </li>
          </ul>

          <ul className="navlinks">
            <li className="nav-item">
              <a className="link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="link" href="#art">Art</a>
            </li>
            <li className="nav-item">
              <a className="link" href="#contact">Contact</a>
            </li>
          </ul>
        </>
      ) : (
        <>
          <button className={!menuToggle ? "mobile-button" : "mobile-button open"} onClick={() => setMenuToggle(!menuToggle)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </>
      )}
      
      {isBelowLargeScreen && (
        <div className={menuToggle ? "mobile-nav open" : "mobile-nav hidden"}>

          <ul className="mobilelinks">
            <li className="mobile-nav-item" onClick={() => setMenuToggle(!menuToggle)}>
              <a className="mobile-link" href="#home">Home</a>
            </li>
            <li className="mobile-nav-item" onClick={() => setMenuToggle(!menuToggle)}>
              <a className="mobile-link" href="#about">About</a>
            </li>
            <li className="mobile-nav-item" onClick={() => setMenuToggle(!menuToggle)}>
              <a className="mobile-link" href="#art">Art</a>
            </li>
            <li className="mobile-nav-item" onClick={() => setMenuToggle(!menuToggle)}>
              <a className="mobile-link" href="#contact">Contact</a>
            </li>
          </ul>

          <ul className="mobile-socials">
            <li className="mobile-social-item">
              <a className="icon-link" href="https://www.instagram.com/mandy_designs_/" target='_blank' rel="noreferrer"><FiInstagram /></a>
            </li>
            <li className="mobile-social-item">
              <a className="icon-link" href="https://www.facebook.com/profile.php?id=100013426179504&mibextid=LQQJ4d" target='_blank' rel="noreferrer"><FaFacebookF /></a>
            </li>
            <li className="mobile-social-item">
              <a className="icon-link" href="https://www.linkedin.com/in/amandaroyaards/" target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
            </li>
            <li className="mobile-social-item">
              <a className="icon-link" href="mailto:royaardsam@gmail.com"><FiMail /></a>
            </li>
          </ul>

        </div>
      )}

    </div>
  )
}

export default Header
