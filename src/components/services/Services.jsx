import React from 'react'
import "./services.css"
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
          <article className='service'>
            <div className="service-head">
              {/**  UI/UX */}
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service-list">
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
            </ul>
          </article>
          {/** WEB DEVELOPMET */}
          <article className='service'>
            <div className="service-head">
              <h3>WEB DEVELOPMENT</h3>
            </div>
            <ul className="service-list">
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet 
                  </p>
              </li>
            </ul>
          </article>
          {/** content creation */}
          <article className='service'>
            <div className="service-head">
              <h3>CONTENT CREATION</h3>
            </div>
            <ul className="service-list">
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
              </li>
            </ul>
          </article>
      </div>
    </section>
  )
}

export default Services