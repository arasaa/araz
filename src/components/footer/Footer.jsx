import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer-logo'>ARAZ</a>

      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
          <a href=""><FaFacebookF /></a>
          <a href=""><AiFillLinkedin /></a>
          <a href=""><BsTwitter /></a>
          <a href=""><FaInstagramSquare /></a>
        </div>
    </footer>
  )
}

export default Footer
