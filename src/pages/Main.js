import React from 'react';
import { Route, Routes } from "react-router-dom"

import Home from "./Home";
import Service from "./Service";
import Portifolio from "./Portifolio";
import Blog from "./Blog";
import Contact from "./Contact";
// import Header from "../Components/Header";
import About from "./About";
// import ScrollTop from "./Components/ScrollTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from '../Components/RegisterUser';
import Login from "../Components/Login";
const Main = () => {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Portifolio" element={<Portifolio/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default Main
