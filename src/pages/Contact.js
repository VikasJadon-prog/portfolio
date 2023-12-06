import React from "react";
import aboutContact from '../assets/images/aboutContact.jpg'

const Contact = () => {
  return <div className="contact">
    <div className="contact-form">
      <div className="content">
        <h2 className="contact-content-h2">Hire Me.</h2>
        <p className="contact-content-p">"I am available for freelance work. Connect with me via phone: "
          <a className="contact-content-a" href="xyz">01923 088574</a> or email: <a className="contact-content-a" href="xyz">admin@example.com</a></p>
      </div>
      <div >
        <form className="form">
          <label className="item01">
            <input type="text" name="name" id="item01" placeholder="Your Name" />
          </label >
          <label className="item02">
            <input type="text" name="email" id="item01" placeholder="Your Email" />
          </label>
          <label className="item03">
            <input type="text" name="subject" id="item01" placeholder="Write a Subject" />
          </label>
          <label className="item04">
            <input type="text" name="message" id="item04" placeholder="Your Message" />
          </label>
          <button type="submit" value="submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
    <div className="contactimgdiv">
      <img className="contactimg" src={aboutContact}  alt="contactimg"/>
    </div>

  </div>
};

export default Contact;