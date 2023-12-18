import React from 'react';
import { Route, Routes } from "react-router-dom"

import Home from "./Home";
import Service from "./Service";
import Portifolio from "./Portifolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Header from "../Components/Header";
import About from "./About";
// import ScrollTop from "./Components/ScrollTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from '../Components/RegisterUser';



const Main = () => {

  return (
    <>
     <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about"  element={<About />} />
            <Route path="/service" e element={<Service />} />
            <Route path="/Portifolio" element={<Portifolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/register' element={<RegisterUser/>}/>
          </Routes>
          
    </>

  )
}

export default Main
