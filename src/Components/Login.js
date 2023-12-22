
import React, { useState } from 'react';
import aboutContact from '..//assets/images/aboutContact.jpg';
import { FaUser } from "react-icons/fa";
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from "react-router-dom";
import logo1 from '../assets/images/logo.png';
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";


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
    const [cookies] = useCookies(['user']);
    const [logUser,setLogUser]=useState('');
    const [logPass,setPass]= useState('');
    const [eye,setEye]=useState(true)
    useEffect(() => {
        const cookiesData = cookies.user || [];
        setFetchData(cookiesData);
        console.log(cookiesData)
    }, [cookies.user]);
    const navigate = useNavigate();
    // useEffect(() => {
    //     let login = localStorage.getItem('token')
    //     if (login) {
    //         navigate('/')
    //     }
    // }, [navigate])
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
            let foundUser = fetchData.find((element) => element.email === logData.email);
            let foundPass = fetchData.find((element) => element.password === logData.password)
            if (foundUser && foundPass) {
                localStorage.setItem('token', true)
                navigate("/")
            }
            if (!foundUser)
            {
                setLogUser("Email Incorrect")
            }
            else if(foundUser)
            {
                setLogUser('')
               if (!foundPass){
                    setPass("Password Incorrect")
                }
            }
            if (foundPass)
            {
                setPass('')
            }
            
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
                                            <img className='login-logo' src={logo1}
                                                style={{ width: " 75px" }} alt="logo" />
                                            <h1 className=" fw-bold mt-1 mb-3 pb-1" >Try Do</h1>
                                        </div>
                                        <form className='logForm' onSubmit={handleLogSub} >
                                            <h3 className="text-center">Log In</h3>
                                            <div className="form-outline mb-4">

                                               {logUser?<p className='err'>{logUser}</p>: <label className="form-label">Username</label>}
                                               <div className='loginputs'>
                                              <FaUser />
                                                <input type="email" name="email" value={logData.email} onChange={handleLogInput} className="form-control"
                                                    placeholder=" email address" /></div>
                                                {emailErr ? <p className="err">{emailErr}</p> : null}
                                            </div>

                                            <div className="form-outline mb-5">
                                               {logPass? <p className='err'>{logPass}</p>:<label className="form-label" >Password</label>}
                                               <div className='loginputs'>
                                                <RiLockPasswordFill />
                                                    <input type={eye?"password":"text"} name="password" value={logData.password} onChange={handleLogInput} className="form-control" id='password' placeholder='Password' />
                                                    <span >{eye?<IoMdEye onClick={()=>setEye(false)}/>:<IoEyeOff onClick={()=>setEye(true)}/>
                                              }</span>
                                    </div>
                                                {passwordErr ? <p className="err">{passwordErr}</p> : null}
                                               
                                            </div>
                                            <div className="text-center pt-1 mb-5 pb-1" id="login-btn">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" value="submit">Sign In</button>
                                                <br />
                                                <a className="text-white" href="#!">Forgot password?</a>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center pb-4" >
                                                <p className="mb-0 me-2" id='login-p'>Don't have an account?   <Link to="/register" ><u>Create new</u></Link> </p>
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
export default RegisterUser;
