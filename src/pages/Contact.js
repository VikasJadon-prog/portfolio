import React, { useState } from "react";
import aboutContact from '../assets/images/aboutContact.jpg';
import Table from 'react-bootstrap/Table';


const Contact = () => {
const [update,setUpdate] =useState([])
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value, }));
   
  }
  const handleSubmit = (e) => {
    
    e.preventDefault()
    update.push(formData)
console.log(update)
// setFormData(formData)
  }
  return <>
    <div className="contact">
      <div className="contact-form">
        <div className="content">
          <h2 className="contact-content-h2">Hire Me.</h2>
          <p className="contact-content-p">"I am available for freelance work. Connect with me via phone: "
            <a className="contact-content-a" href="xyz">01923 088574</a> or email: <a className="contact-content-a" href="xyz">admin@example.com</a></p>
        </div>
        <div >
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="fname" value={formData.fname} onChange={handleInput}  id="input01" className="formInput" placeholder="Your Name*" />
            <input type="text" name="email" value={formData.email} onChange={handleInput} 
              id="input02" className="formInput" placeholder="Your Email*" />
            <input type="text" name="subject" value={formData.subject} onChange={handleInput} 
              id="input03"
              className="formInput" placeholder="Write a Subject" />
            <input type="text" name="message" value={formData.message} onChange={handleInput}
              id="input04" className="formInput4" placeholder="Your Message" />
            <button type="submit" value="submit" id="submit" >Submit</button>
          </form>
        </div>
      </div>
      <div className="contactimgdiv">
        <img className="contactimg" src={aboutContact} alt="contactimg" />
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
{/* 
          {formData.map((data,i)=>(
            <tr key={i}>
              <td>{data.fname}</td>
              <td>{data.email}</td>
              <td>{data.subject}</td>
              <td>{data.message}</td>
            </tr>
           ))}   */}
        </tbody>
      </Table>
    </div>
  </>
};

export default Contact;