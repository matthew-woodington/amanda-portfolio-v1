import "./footer.css"
import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'

function Footer() {
  return (
    <div className='footer'>

      <div className="footer-content">

        <h1 className="footer-follow">Follow @</h1>

        <ul className="footer-social">
          <li className="footer-social-item">
            <a className="footer-link" href="https://www.instagram.com/mandy_designs_/" target='_blank' rel="noreferrer"><FiInstagram /></a>
          </li>
          <li className="footer-social-item">
            <a className="footer-link" href="https://www.facebook.com/profile.php?id=100013426179504&mibextid=LQQJ4d" target='_blank' rel="noreferrer"><FiFacebook /></a>
          </li>
          <li className="footer-social-item">
            <a className="footer-link" href="https://www.linkedin.com/in/amandaroyaards/" target='_blank' rel="noreferrer"><FiLinkedin /></a>
          </li>
          <li className="footer-social-item">
            <a className="footer-link" href="mailto:royaardsam@gmail.com"><FiMail /></a>
          </li>
        </ul>

      </div>
      
    </div>
  )
}

export default Footer
