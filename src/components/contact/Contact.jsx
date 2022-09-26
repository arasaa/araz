import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'

function Contact() {
  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact-container">
      <div className="contact-options">
        <article className="contact-option">
          <MdOutlineEmail className='contact-option-icon'/>
          <h4>Email</h4>
          <h5>arazsaydu@gmail.com</h5>
          <a href="mailto:arazsaydu@gmail.com">send massage</a>
        </article>
        <article className="contact-option">
          <TbBrandTelegram className='contact-option-icon'/>
          <h4>Telegram</h4>
          <h5>telegram</h5>
          <a href="#" target="blank">write me</a>
        </article>
        {/**
         *   <article className="contact-option">
          <TbBrandTelegram />
          <h4>Whatsapp</h4>
          <h5>telegram</h5>
          <a href="https://api.whatsapp.com/send?phone=00947589" target="blank">write me</a>
        </article>
         */}

         <form action="">
          <input type="text" name='name' placeholder='your full name' required/>
          <input type="email" name='email' placeholder='your email' required />
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
         </form>
      </div>
    </div>
    </section>
  )
}


export default Contact