import './contact.css'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const form = useRef()

  const notifySend = () => toast.success("Message sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_alsh3ng", "template_80fomxs", form.current, "KJDJJY2MXtVO7hOvY")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })

      form.current.reset()
    
    notifySend()
  }

  return (
    <div id='contact' className='contact main-page'>
      <ToastContainer />
      <section className='contact-main'>
        <div className="contact-head">
          <h1 className='contact-title'>Contact</h1>
          <h2 className='contact-subtitle'>Let's Talk!</h2>
        </div>
        <div className="contact-body">
          <div className="contact-text">
            <p>Have an idea?</p>
            <p>Ready to hear more?</p>
            <p>Reach out and let's bring your story to life!</p>
          </div>
          <div className="contact-form">
            <form className='form' ref={form} onSubmit={sendEmail}>
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
        </div>
      </section>
    </div>
  )
}

export default Contact
