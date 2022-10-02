import React from 'react'
import "./about.css"
import aboutPic from '../../assets/aboutPic.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={aboutPic} alt='About image' />
          </div>
        </div>
        <div className='about-contnet'>
          <div className='about-cards'>
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5> Experience</h5>
              <small> air quality</small>
            </article>

            <article className='about-card'>
              <FiUsers className='about-icon' />
              <h5>Clients</h5>
              <small>0</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>2+</small>
            </article>
          </div>
          <p className='about-discription'>
           Born in 1991 in Dirbasiya, Syria &amp; based in Berlin <br />
            a Full-Stack Web Developer <br />
            I design and code beautifully simple things &amp; connecting them with the Server.
          </p>
          <a href='#contact' className='btn btn-primary'>let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About