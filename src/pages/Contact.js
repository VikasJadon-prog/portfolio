import React, { useState } from "react";
import aboutContact from '../assets/images/aboutContact.jpg';
import Table from 'react-bootstrap/Table';


const Contact = () => {

const [product ,setProduct] = useState([])


  return <>
  <div className="contact">
    <div className="contact-form">
      <div className="content">
        <h2 className="contact-content-h2">Hire Me.</h2>
        <p className="contact-content-p">"I am available for freelance work. Connect with me via phone: "
          <a className="contact-content-a" href="xyz">01923 088574</a> or email: <a className="contact-content-a" href="xyz">admin@example.com</a></p>
      </div>
      <div >
        <form className="form">
        <input type="text" name="name" id="item01" placeholder="Your Name*" />
        <input type="text" name="email" id="item01" placeholder="Your Email*" />
          <input type="text" name="subject" id="item01" placeholder="Write a Subject" />
          <input type="text" name="message" id="item04" placeholder="Your Message" />
          <button type="submit" value="submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
    <div className="contactimgdiv">
      <img className="contactimg" src={aboutContact}  alt="contactimg"/>
    </div>

  </div>
  <div className="form">
  <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Your Name</th>
          <th>Your email</th>
          <th>Subject</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
};

export default Contact;