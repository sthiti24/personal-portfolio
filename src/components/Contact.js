import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5kvye0y', 'template_k0vudbk', form.current, 'vGILDFuve65SjJdeu')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
 <div className='contact'>
     <h1 className='contact-title'>Contact me</h1> 
     <p className='contact-para'>Got a question or proposal, or just want to say hello?Go ahead.</p>
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
           <div className='contact-form-input'> 
             <div className='input-div'>
              <label>Name</label>
              <input className='input' type="text" name="user_name" required autoComplete='off'
              placeholder='Enter your name'/>
              </div>
              <div className='input-div'>
              <label>Email</label>
              <input className='input' type="email" name="user_email" required autoComplete='off'
              placeholder='Enter your email'/>
              </div>
            </div> 
            <div className='contact-form-msg'>   
              <label>Message</label>
              <textarea className='input-message' placeholder='Enter your message' name="message" required autoComplete='off'/>
            </div>
              <input className='submit-btn' type="submit" value="Send" />
    </form>
        </div>
    )
}