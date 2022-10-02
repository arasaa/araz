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
                  Saas UI Design
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Responsive Web Design
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Website Redesign
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Design graphic user interface elements: menus, tabs and widgets
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                  Build page navigation buttons and search fields
                  </p>
  </li>
            </ul>
          </article>
           {/** content creation */}
           <article >
            <div className="service-head">
              <h3>CONTENT CREATION</h3>
            </div>
            {/** 
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
            */}
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
                Ongoing Website Maintenance
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                WordPress Support
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                Hosting
                  </p>
              </li>
              <li>
                <AiOutlineCheck className='service-list-icon' />
                <p>
                Database creation, integration, and management
                  </p>
              </li>
             
            </ul>
          </article>
         
      </div>
    </section>
  )
}

export default Services