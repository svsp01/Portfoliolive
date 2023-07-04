import React, { useState } from 'react';
import '../CSS/Contact.css';

const socialMedia = {
  
  linkedin:'https://www.linkedin.com/in/sakthi-svsp-6a2447165/',
  envelope:'mailto:sakthisvsp01@gmail.com',
  twitter: 'https://twitter.com/Sakthi_Svsp01',
  github: 'https://github.com/svsp01',
  instagram: 'https://www.instagram.com/vanta_moonn/',
  dribbble:'https://dribbble.com/Sakthi_Svsp'
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
  
    // Create a new FormData object and populate it with the form data
    const formData = new FormData(form);
    
    // Make a POST request to the Formspree endpoint
    fetch('https://formspree.io/f/meqbjyqy', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          // Clear the form fields upon successful submission
          form.reset();
          setResponseMessage('Form submitted successfully!');
        } else {
          throw new Error('Failed to submit form');
        }
      })
      .catch(error => {
        console.error(error);
        setResponseMessage('Failed to submit form. Please try again later.');
      });
  };  

  const socialLinks = Object.keys(socialMedia).map((key, index) => (
    <a key={index} href={socialMedia[key]} className="btn btn-outline-primary">
      <i className={`bi bi-${key} shadow-lg`}></i>
    </a>
  ));

  return (
    <div  className="container mt-5 d-flex justify-content-center align-items-center">
      <div id="contact-card" className='container'>
        <div id="card-body" className='text-center my-3'>
          <h2 className='py-3 rounded mb-5'>Contact Me</h2>
          <form onSubmit={submitForm}>

            <div id="name-group" className="mb-4 container">
              <input
                type="text"
                className="container form-control rounded-4 py-3 "
                placeholder="Your Name"
                value={name}
                name = 'name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div id="email-group" className="mb-3 container">
              <input
                type="email"
                name="_replyto"
                className="container form-control rounded-4 py-3 "
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div id="message-group" className="mb-3 container">
              <textarea
                className="container form-control rounded-3 py-3 mb-5"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" id="submit-btn" className="btn btn-primary mb-5 shadow">Send Message</button>
          </form>
          <div id="responseMessage" className="mt-3">{responseMessage}</div>
          <div id="social-icons" className="mt-4 d-flex justify-content-around container">{socialLinks}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
