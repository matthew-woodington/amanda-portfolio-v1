import "./header.css"
import React from 'react'
import HeroIcon from "../../assets/images/HeroIcon.jpg"


function Header() {
  return (
    <div className="navbar">

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

      {/* <div className="logo-container">
        <img src={HeroIcon} alt="logo" className="logo" />
      </div> */}

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
      
    </div>
  )
}

export default Header
