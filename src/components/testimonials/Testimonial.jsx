import React from 'react'
import "./testimonial.css"
import avatar from '../../assets/avatar.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const client =[
  {
    id: 1,
    image: avatar,
    title: 'client name',
    name: 'client name',
    review: ' maiores vero officia, quis nisi repellendus atque, accusantium eveniet omnis cum',
     
  },
  {
    id: 2,
    image: avatar,
    title: 'client name',
    name: 'client name',
    review: ' maiores vero officia, quis nisi repellendus atque, accusantium eveniet omnis cum',
     
  },
  {
    id: 3,
    image: avatar,
    title: 'client name',
    name: 'client name',
    review: ' maiores vero officia, quis nisi repellendus atque, accusantium eveniet omnis cum',
     
  }
]
const Testimonial = () => {
  return (
    <div className="hide-contnet">
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container"
       //install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          client.map(({image,title, name, review}, index) => {
            return(
              <SwiperSlide className="testimonial" key={index}>
              {/**Clients images */}
              <div className="client-avatar">
                <img src={image} alt={title} />
              </div>
              <h5>{name}</h5>
                <small className='client-review'>
                  {review}
                    </small>
            </SwiperSlide> 
            )
          })
        }
    
      </Swiper> 
    </section>
    </div>
  )
}

export default Testimonial