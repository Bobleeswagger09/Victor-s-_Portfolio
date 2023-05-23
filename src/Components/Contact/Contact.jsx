import './Contact.css'
import { BsWhatsapp } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_scyo14a', 'template_xz7216j', form.current, 'S9L_DuZHb-3MMAddi')
    e.target.reset();
      
  };
  return (
     
    <>
      <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>samuelvictoralexander@gmail.com</h5>
              
              <a href='mailto:samuelvictoralexander@gmail.com' target='_blank' rel="noreferrer">send a message</a>
            </article>

            <article className='contact__option'>
              <BsFacebook className='contact__option-icon'/>
              <h4>facebook</h4>
              <h5>Edidiong Samuel</h5>
              
              <a href='https://web.facebook.com/?_rdc=1&_rdr' target='_blank' rel="noreferrer">send a message</a>
            </article>

            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatApp</h4>
              <h5>+234 9077638146</h5>
              
              <a href='https://wa.me/send?phone+2349077638146' target='_blank' rel="noreferrer">send a message</a>
            </article>
          </div>
            <form ref={form} onSubmit={sendEmail} >
              <input type='text' name='name'  placeholder='Your Full Name' required/>
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name='message' rows='7' placeholder='Your Message' required/>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            
            </form>
            
            
        </div>


      </section>
    </>

  )
}

export default Contact