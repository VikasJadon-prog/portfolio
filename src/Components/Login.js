import React, { useState } from 'react';
import logo1 from '../assets/images/logo.png'

const Login = () => {
    const [logData, setLogData] = useState({
        email: "",
        password: ""
    })
    const [logArr, SetLogArr] = useState([])
    const handleLogInput = (e) => {
        const { name, value } = e.target;
        setLogData((preState) => ({...preState, [name]: value }))  
    }
    const handleLogSub = (e) => {
        e.preventDefault();
        const pre = [...logArr, logData]
        SetLogArr(pre)
        console.log(pre)
    }
    return (
        <section className="h-150 gradient-form" id='login-sec' >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-5">
                        <div className="card rounded-4 ">
                            <div className="col-xl-12">
                                <div className="card-body p-md-5 mx-md-4">
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
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" >Password</label>
                                            <input type="password" name="password" value={logData.password} onChange={handleLogInput} className="form-control" />
                                        </div>
                                        <div className="text-center pt-1 mb-5 pb-1" id="login-btn">
                                            <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit"  value="submit">Log
                                                in</button> 
                                            <br />
                                            <a className="text-white" href="#!">Forgot password?</a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center pb-4" >
                                            <p className="mb-0 me-2" id='login-p'>Don't have an account?</p>
                                            <button type="button" className="btn btn-outline-danger">Create new</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
