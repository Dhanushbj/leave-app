import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
 
export const Mail = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm('service_llt4118', 'template_r006b9a', form.current, 'c7GKWCwOgOjqKnGxt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    
    <form ref={form} onSubmit={sendEmail}>
      <label>Subject</label>
      <input type="text" name="Subject" />
      <label>to_name</label>
      <input type="email" name="to_name" />
      <label>from_name</label>
      <input type="email" name="from_name" />
      <label>Message</label>
      <textarea type="text" name="message" />
      <input type="submit" value="sendEmail" />
      
    </form>
  );
};