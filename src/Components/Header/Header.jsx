import "./header.css"
import React, { useEffect, useState } from 'react'
import HeroIcon from "../../assets/images/HeroIcon.jpg"
import useMediaQuery from "../../hooks/useMediaQuery"


function Header() {
  const isBelowLargeScreen = useMediaQuery("(max-width: 1060px)")

  const [menuToggle, setMenuToggle] = useState(false)

  useEffect(() => {
    if(menuToggle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuToggle])

  return (
    <div className="navbar">

      {!isBelowLargeScreen ? (
        <>
          <ul className="socials">
            <li className="social-item">
              <a className="link" href="#">Instagram</a>
            </li>
            <li className="social-item">
              <a className="link" href="#">Facebook</a>
            </li>
            <li className="social-item">
              <a className="link" href="#">LinkedIn</a>
            </li>
          </ul>

          <ul className="navlinks">
            <li className="nav-item">
              <a className="link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="link" href="#">Art</a>
            </li>
            <li className="nav-item">
              <a className="link" href="#">Contact</a>
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
        <div className={menuToggle ? "mobile-nav open" : "mobile-nav"}>

          <ul className="mobilelinks">
            <li className="mobile-nav-item" onClick={() => setMenuToggle(!menuToggle)}>
              <a className="mobile-link" href="#">Home</a>
            </li>
            <li className="mobile-nav-item" onClick={() => setMenuToggle(!menuToggle)}>
              <a className="mobile-link" href="#">About</a>
            </li>
            <li className="mobile-nav-item" onClick={() => setMenuToggle(!menuToggle)}>
              <a className="mobile-link" href="#">Art</a>
            </li>
            <li className="mobile-nav-item" onClick={() => setMenuToggle(!menuToggle)}>
              <a className="mobile-link" href="#">Contact</a>
            </li>
          </ul>

        </div>
      )}

    </div>
  )
}

export default Header
