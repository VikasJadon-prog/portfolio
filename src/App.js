import React from "react";
// import Header from "./Components/Header";
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Portifolio from "./pages/Portifolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./Components/Header";
import About from "./pages/About";


function App() {
  return (
    <>
      <div className="App" >
      <BrowserRouter>
        <Header />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/service" e element={<Service />} />
              <Route path="/Portifolio" element={<Portifolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
      
        </div>
    </>
  );
}

export default App;
