import React from "react";
import './contact.css'

const Contact = () => {
  return (
    <>
      <section name='contact' className="contact section" id="contact">
      
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
          <div className="contact__content">
            
            <form method="post" action="https://getform.io/f/d99b15e6-4246-47ec-9f1c-cb3cfb423166" className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag" >Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Your Name" autoComplete="off" required
                />
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Your Email" autoComplete="off" required
                />
              </div>
              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Message</label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Write your message" autoComplete="off" required
                ></textarea>
              </div>
              <button className=" button button--flex">Send Message</button>
            </form>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0a192f"
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,224C672,224,768,256,864,245.3C960,235,1056,181,1152,133.3C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      </section>
    </>
  );
};

export default Contact;
