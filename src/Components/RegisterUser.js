import React, { useState } from 'react';
import aboutContact from '..//assets/images/aboutContact.jpg';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";
import logo1 from '../assets/images/logo.png';
import { FaUser } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
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
    // const [result, setResult] = useState('');
    const [cookies, setCookie] = useCookies(['user']);
    const [submitted, setSubmitted] = useState(false)
    const [signUpErr, setSignUpErr] = useState(false)
    const [eye, setEye] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirPassErr, setConfirPassErr] = useState('');
    const [conEye, setConEye] = useState(true)
    useEffect(() => {
        const cookiesData = cookies.user || [];
        setRegDataArr(cookiesData);
    }, [cookies.user, setRegDataArr]);
    const handleRegInput = (e) => {
        const { name, value } = e.target;
        setRegData((preRegData) => ({ ...preRegData, [name]: value }))
    }
    const handleReg = (e) => {
        e.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        let result = true
        if (regData.fname.length === 0) {
            setFnameErr("invalid")
            // setResult(false)
            result = false;
        }
        else if (regData.fname.length > 20) {
            setFnameErr("Not More Then 10 Words")
            // setResult(false);
            result = false;
        }
        else {
            setFnameErr(" ")
        }
        if (!regData.email.match(regex)) {
            setEmailErr("invalid")
            // setResult(false)
            result = false;
        }
        else {
            setEmailErr(" ")
        }
        if (regData.password.length === 0) {
            setPasswordErr("invalid")
            // setResult(false)
            result = false;
        }

        else if (regData.password.length > 20) {
            setPasswordErr("Not More Then 20 Words")
            // setResult(false)
            result = false;
        }
        else {
            setPasswordErr(" ")
        }
        if (regData.password !== confirmPassword) {
            setConfirPassErr("Password Does not Match")
            // setResult(false)
            result = false;
        }
        else {
            setConfirPassErr(" ")
        }
        if (result) {
            let foundUser = regDataArr.find((element) => element.email === regData.email)
            if (foundUser) {
                setSignUpErr(true)
            }
            else {
                const re = [...regDataArr, regData]
                setCookie('user', re, { path: '/' });
                setRegData(re)
                setRegData({ fname: "", email: "", password: "" });
                setConfirmPassword('')
                setSubmitted(true);
                setSignUpErr(false)
                setTimeout(() => {
                    setSubmitted(false)
                }, 1200);
            }
        }
    }
    return (
        <section className="vh-100" id='regi-sec'>
            <div className="container h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-9" >
                        <div className="card text-white">
                            <div className="card-body p-md-4">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <div className="text-center mb-0">
                                            <img src={logo1} className='login-logo'
                                                style={{ width: "75px" }} alt="logo" />
                                            <h1 className="fw-bold mt-1 mb-3 pb-0" >Try Do</h1>
                                        </div>
                                        <form className="mx-1 mx-md-4" id='regForm' onSubmit={handleReg}>
                                            <h3 className="text-center">Sign Up</h3>
                                            {submitted && <p className='succ text-center'>Account Created</p>}
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">Your Name</label>
                                                    <div className='loginputs'>
                                                        <FaUser />
                                                        <input type="name" name="fname" value={regData.fname} onChange={handleRegInput} className="form-control" placeholder='Full Name' />
                                                    </div>
                                                    {fnameErr ? <p className="err">{fnameErr}</p> : null}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" >Your Email</label>
                                                    <div className='loginputs'>
                                                        <MdEmail
                                                            size="24px" />
                                                        <input type="email" name="email" value={regData.email} onChange={handleRegInput} id="form3Example3c" className="form-control" placeholder='Email' />
                                                    </div>
                                                    {emailErr ? <p className="err">{emailErr}</p> : null}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">Password</label>
                                                    <div className='loginputs'>
                                                        <RiLockPasswordFill size="24px" />
                                                        <input type={eye ? "password" : "text"} name="password" value={regData.password} onChange={handleRegInput} className="form-control" placeholder='Password' autoComplete='on' />
                                                        <span >{eye ? <IoMdEye onClick={() => setEye(false)} /> : <IoEyeOff onClick={() => setEye(true)} />
                                                        }
                                                        </span>
                                                    </div>
                                                    {passwordErr ? <p className="err">{passwordErr}</p> : null}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">Confirm Password</label>
                                                    <div className='loginputs'>
                                                        <RiLockPasswordFill size="24px" />
                                                        <input type={conEye ? "password" : "text"} name="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder='Confirm Password' autoComplete='on' />
                                                        <span >{conEye ? <IoMdEye onClick={() => setConEye(false)} /> : <IoEyeOff onClick={() => setConEye(true)} />
                                                        }</span>
                                                    </div>
                                                    {confirPassErr ? <p className='err'>
                                                        {confirPassErr}</p> : null}
                                                </div>
                                            </div>
                                            <div className="text-center pt-1 mb-1 pb-1" id="login-btn">
                                                {signUpErr && <p className="err">Email Already Registered</p>}
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" value="submit">Sign Up</button>
                                            </div>
                                            <p className="text-center text mt-2 mb-0 " id='regForm-p'>Have already an account?
                                                <Link to="/login"><u >Login here</u></Link></p>
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
