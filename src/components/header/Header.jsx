import React from 'react'
import "./header.css"
import CTA from './CTA'
import pic2 from '../../assets/pic2.jpg'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Araz Saydu</h1>
        <h5 className='text-light'>Fullstack Webdeveloper</h5>
        <CTA />

        <div className='me'>
          <img src={pic2} alt='' />
        </div>

        <a href='#contact' className='scroll-down'>Scroll Down</a>
        <HeaderSocial />
      </div>
    </header>
  )
}

export default Header