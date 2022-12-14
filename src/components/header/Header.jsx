import React from 'react'
import "./header.css"
import CTA from './CTA'
import pic2 from '../../assets/pic2.jpg'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Araz Saydu</h1>
        <h5 className='text-light'>Full-Stack Web Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={pic2} alt='' />
        </div>

        <a href='#contact' className='scroll-down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header