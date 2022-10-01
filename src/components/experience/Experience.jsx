import React from 'react'
import "./experience.css"
import {AiFillCheckCircle} from 'react-icons/ai'

function Experience() {
  return (
    <section id='experience'>
      <h5>Skils I have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
            <h3>Frontend Development</h3>
            <div className="experience-content">
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon'/>
                <div>
                <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
                <div>
                <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
               <div>
               <h4>Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
               </div>
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
               <div>
               <h4>SASS</h4>
                  <small className="text-light">Intermediate</small>
               </div>
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
              <div>
              <h4>JAVASCRIPT</h4>
                  <small className="text-light">Experienced</small>
              </div>
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
                <div>
                <h4>REACT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience-backend">
            <h3>Backend Development</h3>
            <div className="experience-content">
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
                <div>
                <h4>Node JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
                
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
                <div>
                <h4>ExpressJS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
                <div>
                <h4>MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
                <div>
                <h4>Mongoose</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
               <div>
               <h4>SQL</h4>
                  <small className="text-light">Intermediate</small>
               </div>
              </article>
              
            </div>
        </div>
        {/************** */}
        <div className="experience-backend">
            <h3>Other Skills</h3>
            <div className="experience-content">
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
                <div>
                <h4>Git and GitHub</h4>
                  <small className="text-light"></small>
                </div>
                
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
                <div>
                <h4>REST API</h4>
                  <small className="text-light"></small>
                </div>
              </article>
              <article className='experience-details'>
                <AiFillCheckCircle className='experience-details-icon' />
                <div>
                <h4>NPM</h4>
                  <small className="text-light"></small>
                </div>
              </article>
              
              
            </div>
        </div>
        </div>
    </section>
  )
}

export default Experience