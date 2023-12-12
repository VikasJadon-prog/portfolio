import React, { useState } from "react";
import aboutContact from '../assets/images/aboutContact.jpg';
import Table from 'react-bootstrap/Table';


const Contact = () => {
  const [update, setUpdate] = useState([])
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: ""
  });
  const [err, setErr] = useState({})
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value }));

  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setErrors(validateValues(inputFields));
  //   setSubmitting(true);
  // };
  //VALIDATION
  let result = true;
  const validation =()=>{
    let err={}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (formData.fname.length == 0) {
    err.fname="invalid";
    result = false
  }
  else if (formData.fname.length > 10) {
   err.fname="Not More Then 10 Words"
    result = false
  }
  if (formData.email.length == 0) {
  err.email="invalid"
    result = false
  }
  else if (!formData.email.match(regex)) {
    err.email="not type of email"
    result = false;
  }

  if (formData.subject.length == 0) {
    err.subject="invalid"
    result = false;
  }
  else if (formData.subject.length > 50) {
    err.subject="Not More Then 50 Words"
    result = false;
  }
  if (formData.message.length == 0) {
    err.message="invalid"
    result = false

  }
  else if (formData.message.length > 500) {
    err.message="Not More Then 500 "
    result = false
  }
return err;

  }

  // if (result==true) {
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
      
  //     console.log(update)
  //     setUpdate((prevalue) => ([...prevalue, formData]));
  //     setFormData({ fname: "", email: "", subject: "", message: "" })
  //   }

  // }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setErr(validation(formData))
      console.log(update)
      setUpdate((prevalue) => ([...prevalue, formData]));
      setFormData({ fname: "", email: "", subject: "", message: "" })
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
            <input type="text" name="fname" value={formData.fname} onChange={handleInput} id="input01" className="formInput" placeholder="Your Name*" />
            {err.fname ? <p className="err">{err.fname}</p> : null}
            <input type="text" name="email" value={formData.email} onChange={handleInput}
              id="input02" className="formInput" placeholder="Your Email*" />
            {err.email ? <p className="err">{err.email}</p> : null}
            <input type="text" name="subject" value={formData.subject} onChange={handleInput}
              id="input03"
              className="formInput" placeholder="Write a Subject" />
            {err.subject ? <p className="err">{err.subject}</p> : null}
            <input type="text" name="message" value={formData.message} onChange={handleInput}
              id="input04" className="formInput4" placeholder="Your Message" />
            {err.message ? <p className="err">{err.message}</p> : null}
            <button type="submit" value="submit" id="submit"  >Submit</button>
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
          {update.map((data, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.fname}</td>
              <td>{data.email}</td>
              <td>{data.subject}</td>
              <td>{data.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </>
};

export default Contact;