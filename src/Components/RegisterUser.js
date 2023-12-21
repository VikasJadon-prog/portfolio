import React, { useState } from 'react';
import aboutContact from '..//assets/images/aboutContact.jpg';
// import { FaUser } from "react-icons/fa";
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";
import logo1 from '../assets/images/logo.png'

const RegisterUser = () => {
    const [regData, setRegData] = useState({
        fname: "",
        email: "",
        password: ""
    })
    const [regDataArr, setRegDataArr] = useState([]);
    const [fnameErr, setFnameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [result, setResult] = useState(true);
    const [cookies, setCookie] = useCookies(['user']);
    // const [get, setGet] = useState('')
    useEffect(() => {
        const cookiesData = cookies.user || [];
        setRegDataArr(cookiesData);
    }, [cookies.user]);
    const handleRegInput = (e) => {
        const { name, value } = e.target;
        setRegData((preRegData) => ({ ...preRegData, [name]: value }))
    }
    const handleReg = (e) => {
        e.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (regData.fname.length === 0) {
            setFnameErr("invalid")
            setResult(false)
        }
        else if (regData.fname.length > 20) {
            setFnameErr("Not More Then 10 Words")
            setResult(false)
        }
        if (!regData.email.match(regex)) {
            setEmailErr("invalid")
            setResult(false)
        }
        if (regData.password.length === 0) {
            setPasswordErr("invalid")
            setResult(false)
        }
        else if (regData.password.length > 20) {
            setPasswordErr("Not More Then 20 Words")
            setResult(false)
        }
        if (result) {
            const re = [...regDataArr, regData]
            setCookie('user', re, { path: '/' });
            // const cookiesData = [...user, regData]
            // setGet(cookiesData)
            setRegData(re)
            setRegData({ fname: "", email: "", password: "" });
        }


    }
    return (
        <section className="vh-100" id='regi-sec'>
            <div className="container h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-9" >
                        <div className="card text-white">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <div className="text-center mb-1">                                     <img src={logo1}
                                            style={{ width: " 75px" }} alt="logo" />
                                            <h1 className=" fw-bold mt-1 mb-4 pb-0" >Try Do</h1>
                                        </div>
                                        <form className="mx-1 mx-md-4" id='regForm' onSubmit={handleReg}>
                                            <h3 className="text-center">Sign Up</h3>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">Your Name</label>
                                                    <input type="name" name="fname" value={regData.fname} onChange={handleRegInput} className="form-control" placeholder='Full Name' />
                                                    {fnameErr ? <p className="err">{fnameErr}</p> : null}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" >Your Email</label>
                                                    <input type="email" name="email" value={regData.email} onChange={handleRegInput} id="form3Example3c" className="form-control" placeholder='Email' />
                                                    {emailErr ? <p className="err">{emailErr}</p> : null}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" >Password</label>
                                                    <input type="password" name="password" value={regData.password} onChange={handleRegInput} className="form-control" placeholder='Password' />
                                                    {passwordErr ? <p className="err">{passwordErr}</p> : null}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" value="submit" className="btn btn-primary btn-lg" id='reg-btn'>Register</button>
                                            </div>
                                            <p className="text-center text mt-5 mb-0 " id='regForm-p'>Have already an account? <a href="#!"
                                                className="fw-bold"></a>
                                                <Link to="/login" ><u>Login here</u></Link></p>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                                        <img className="contactimg" src={aboutContact} alt="contactimg" />
                                        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image"/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RegisterUser
