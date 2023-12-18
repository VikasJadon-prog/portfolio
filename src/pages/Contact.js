import React, { useEffect, useState } from "react";
import aboutContact from '../assets/images/aboutContact.jpg';
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useCookies } from "react-cookie";


const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: ""
  });
  const [fnameErr, setFnameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [subjectErr, setSubjecteErr] = useState('');
  const [messageErr, setMessageErr] = useState('');
  const [table, setTable] = useState([]);
  const [edit, setEdit] = useState(true);
  // const [result, setResult] =useState(true)
  const [editItem, setEditItem] = useState(null);
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    const cookiesData = cookies.user || [];
    setTable(cookiesData);
  }, [cookies.user]);

  // useEffect(() => {
  //   const sessionData = JSON.parse(sessionStorage.getItem('user')) || [];
  //   setTable(sessionData);
  // }, []);

  // useEffect(() => {
  //   const localData = JSON.parse(localStorage.getItem('user')) || [];
  //   setTable(localData);
  // }, []);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        let result =true
        if (formData.fname.length === 0) {
          setFnameErr("invalid")
          result=true
        }
        else if (formData.fname.length > 20) {
          setFnameErr("Not More Then 10 Words")
          // setResult(false)
          result=false
        }
        else {
          setFnameErr(" ")
        }
        if (!formData.email.match(regex)) {
          setEmailErr("invalid")
          // setResult(false)
          result=false
        }
        else {
          setEmailErr("")
        }
        if (formData.subject.length > 50) {
          setSubjecteErr("Not More Then 50 Words")
          // setResult(false)
          result=false
        }
        else if (formData.subject.length === 0) {
          setSubjecteErr("Invalid")
          // setResult(false)
          result=false
        }
        else {
          setSubjecteErr(" ")
        }
        if (formData.message.length > 500) {
          setMessageErr("Not More Then 500")
          // setResult(false)
          result=false
        }
        else if (formData.message.length < 0) {
          setMessageErr("Not Less Then 5 Words")
          // setResult(false)
          result=false
        }
        else {
          setMessageErr(" ")
        }
    if (formData && !edit) {
      if (result ==true) {
        table[editItem] = formData;
        // localStorage.setItem('user', JSON.stringify(table));
        setCookie('user', table, { path: '/' });
        // sessionStorage.setItem('user', JSON.stringify(table));
        setEdit(true);
        setFormData({ fname: "", email: "", subject: "", message: "" });
        setEditItem(null);
      }
    } else {
      if (result == true) {
        const updatedTable = [...table, formData];
        // localStorage.setItem('user', JSON.stringify(updatedTable));
        setCookie('user', updatedTable, { path: '/' });
        // sessionStorage.setItem('user', JSON.stringify(updatedTable));
        setTable(updatedTable);
        setFormData({ fname: "", email: "", subject: "", message: "" });
      }
    }
  }
  const handleDelete = (i) => {
    const updatedTable = table.filter((e, index) => index !== i);
    // localStorage.setItem('user', JSON.stringify(table))
    setCookie('user', updatedTable, { path: '/' });
    // sessionStorage.setItem('user', JSON.stringify(updatedTable));
    setTable(updatedTable);
  }

  const handleEdit = (i) => {
    const temp = table.find((e, index) => index === i);
    setEdit(false);
    setFormData(temp);
    setEditItem(i);
  }

  const cancel = () => {
    setEdit(true);
    setFormData({ fname: "", email: "", subject: "", message: "" });
  }

  return (
   <>
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
                {fnameErr ? <p className="err">{fnameErr}</p> : null}
           <input type="text" name="email" value={formData.email} onChange={handleInput}
                  id="input02" className="formInput" placeholder="Your Email*" />
                {emailErr ? <p className="err">{emailErr}</p> : null}
                <input type="text" name="subject" value={formData.subject} onChange={handleInput}
                  id="input03"
                  className="formInput" placeholder="Write a Subject" />
                {subjectErr ? <p className="err">{subjectErr}</p> : null}
                <input type="text" name="message" value={formData.message} onChange={handleInput}
                  id="input04" className="formInput4" placeholder="Your Message" />
                {messageErr ? <p className="err">{messageErr}</p> : null}
                {edit ? <button type="submit" value="submit" id="submit">Submit</button> : <div style={{ display: "flex", columnGap: "1em" }}><button type="submit" value="submit" className="btn btn-outline-success">Save</button>
                  <button type="button" className="btn btn-outline-danger" onClick={cancel}>Cancle</button></div>
                }
              </form>
            </div>
          </div>
          <div className="contactimgdiv">
            <img className="contactimg" src={aboutContact} alt="contactimg" />
          </div>
        </div>
        <div className="formTable">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Your Name</th>
                <th>Your email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Action</th>
    
              </tr>
            </thead>
            <tbody className="tbody">
              {table.map((data, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.fname}</td>
                  <td>{data.email}</td>
                  <td>{data.subject}</td>
                  <td>{data.message}</td>
                  <td >
                    <div className="tableTdBtn">
                      <button type="button" className="btn btn-outline-info" onClick={() => { handleDelete(i) }}><AiFillDelete /></button>
                      <button type="button" className="btn btn-outline-warning" onClick={() => { handleEdit(i) }}><FaEdit /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
   </>
  );
};

export default Contact;