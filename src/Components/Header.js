
import React from "react";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import RightHeader from "../Components/RightHeader";
import Mobile from "./Mobile";
const Header = () => {
  
 
  return (
    <>
    <div className="App-header">
      <div className="app-header-row">
      <div className="Left-header">
       <div className="logo">
       <img
          src={logo}
          alt="Digital Agency"
          className="logo-img"
        />
       </div>
        <div className="navbar">
        <nav className="header-nav">
          <ul className="header-Ui">
            <li >
              <Link  to="/" className="header-li">Home</Link>
            </li>
            <li >
              <Link to="/about" className="header-li">About</Link>
            </li>
            <li >
              <Link to="/service" className="header-li">Service</Link>
            </li>
            <li >
              <Link to="/portifolio" className="header-li">Portifolio</Link>
            </li>
            <li >
              <Link to="/blog" className="header-li">Blog</Link>
            </li>
            <li >
              <Link to="/contact" className="header-li">Contact</Link>
            </li>
          </ul>
        </nav>
        </div>
      </div>
      <div className="app-right-header">
      <RightHeader />
      </div>
      </div>
    </div>
    <Mobile/>
    </>
  )
}

export default Header
