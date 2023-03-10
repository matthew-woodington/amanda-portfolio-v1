import './contact.css'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()

  return (
    <div id='contact' className='contact main-page'>
      <section className='contact-main'>
        <div className="contact-head">
          <h1 className='contact-title'>Contact</h1>
          <h2 className='contact-subtitle'>Let's Talk!</h2>
        </div>
        <div className="contact-form">
          <form className='form' ref={form}>
            <label htmlFor="name">Name</label>
            <input type="text" name='user_name' />
            <label htmlFor="email">Email</label>
            <input type="text" name='user_email' />
            <label htmlFor="name">Message</label>
            <textarea name="message" rows={3} />
            <button className='send-btn' type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
