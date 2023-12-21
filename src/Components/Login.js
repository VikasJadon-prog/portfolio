
import React, { useState } from 'react';
import aboutContact from '..//assets/images/aboutContact.jpg';
// import { FaUser } from "react-icons/fa";
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from "react-router-dom";
import logo1 from '../assets/images/logo.png';


const RegisterUser = () => {

    const [logData, setLogData] = useState({
        email: "",
        password: ""
    })
    const [result, setResult] = useState(true)
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [fetchData, setFetchData] = useState('');
    // const [user,setUser] = useState(false)
    const [cookies, setCookie] = useCookies(['user']);
    const navigate = useNavigate()

    useEffect(() => {
        const cookiesData = cookies.user || [];
        setFetchData(cookiesData);
        console.log(cookiesData)
    }, [cookies.user]);
    useEffect(() => {
        let login = localStorage.getItem('token')
        if (login) {
            navigate('/')
        }
    })
    const handleLogInput = (e) => {
        const { name, value } = e.target;
        setLogData((preState) => ({ ...preState, [name]: value }))
    }
    const handleLogSub = (e) => {
        e.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!logData.email.match(regex)) {
            setEmailErr("invalid")
            setResult(false)
        }
        if (logData.password.length === 0) {
            setPasswordErr("invalid")
            setResult(false)
        }
        else if (logData.password.length > 20) {
            setPasswordErr("Not More Then 20 Words")
            setResult(false);
        }  
        if (result) {
            // localStorage.setItem("token", JSON.stringify(logData))
            fetchData.forEach(element => {
                if (element.email === logData.email && element.password === logData.password) {
                    localStorage.setItem('token', true)
                }
            });
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
                                        <div className="text-center">
                                            <img src={logo1}
                                                style={{ width: " 75px" }} alt="logo" />
                                            <h1 className=" fw-bold mt-1 mb-3 pb-1" >Try Do</h1>
                                        </div>
                                        <form onSubmit={handleLogSub} >
                                            <h3 className="text-center">Log In</h3>
                                            <div className="form-outline mb-4">
                                                <label className="form-label">Username</label>
                                                <input type="email" name="email" value={logData.email} onChange={handleLogInput} className="form-control"
                                                    placeholder=" email address" />
                                                {emailErr ? <p className="err">{emailErr}</p> : null}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" >Password</label>
                                                <input type="password" name="password" value={logData.password} onChange={handleLogInput} className="form-control" />
                                                {passwordErr ? <p className="err">{passwordErr}</p> : null}
                                            </div>
                                            <div className="text-center pt-1 mb-5 pb-1" id="login-btn">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" value="submit">Log
                                                    in</button>
                                                <br />
                                                <a className="text-white" href="#!">Forgot password?</a>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center pb-4" >
                                                <p className="mb-0 me-2" id='login-p'>Don't have an account?</p>

                                                <button type="button" className="btn btn-outline-danger" ><Link to="/register" >Create New</Link></button>
                                            </div>
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
