import "./header.css"
import React from 'react'
import HeroIcon from "../../assets/images/HeroIcon.jpg"


function Header() {
  return (
    <div className="navbar">

      <ul className="socials">
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
      </ul>

      <div className="logo-container">
        <img src={HeroIcon} alt="logo" className="logo" />
      </div>

      <ul className="navlinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Art</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      
    </div>
  )
}

export default Header
