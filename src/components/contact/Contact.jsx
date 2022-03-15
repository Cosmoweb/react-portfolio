import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f2ddjzn', 'template_cjfox2s', form.current, '40ddQTby8gWxFgf1J')

    e.target.reset () 
     
  };

  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

<div className="container contact__container">
  <div className="contact__options">
    <article className="contact__option">
      < MdOutlineMailOutline className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>daniel@cosmoweb.co.nz</h5>
      <a href="mailto:daniel@cosmoweb.co.nz" target='_blank'>Send a Message</a>
    </article>
    <article className="contact__option">
      < RiMessengerFill className='contact__option-icon' />
      <h4>Messenger</h4>
      <h5>Daniel Pinto</h5>
      <a href="https://m.me/danixtlan" target='_blank'>Send a Message</a>
    </article>
    <article className="contact__option">
      < ImWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+64 02040272418</h5>
      <a href="https://api.whatsapp.com/send?phone=+6402040272418" target='_blank'>Send a Message</a>
    </article>
  </div>
  {/* END OF CONTACT OPTIONS */}
  <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="name" placeholder="Your Full Name" required/>
    <input type="email" name="Email" placeholder="Your Email" required/>
    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
</div>

    </section>
  )
}

export default Contact