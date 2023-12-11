
import React from 'react'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/images/logo.png";
import RightHeader from './RightHeader';

const Mobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='mobile-header'>
            <div className='mobile-header-container'>
               <div className='mobile-header-logo'>
               <img
                    src={logo}
                    alt="Digital Agency"
                    className="logo-img"
                />
               </div>
                <div className='mobile-right-header'>
         <div className='mobile-social-right-header'>
         <RightHeader />
         </div>
                <FaBars onClick={( ) => {
                    setIsMenuOpen(true);
                }} className='fabars' />
                <div className={isMenuOpen ? "open" : " "} id='mobile_menu_wrap'>
                    <RxCross2 onClick={() => {
                        setIsMenuOpen(false);

                    }} className='closer' />
                    <ul className='mobile-header-closer-ui'>   
                        <li><Link to="/" className='mobile-header-closer-ui-li'>Home</Link></li>
                        <li><Link to="about" className='mobile-header-closer-ui-li' >About</Link></li>
                        <li><Link to="service" className='mobile-header-closer-ui-li'>Service</Link></li>
                        <li><Link to="portifolio" className='mobile-header-closer-ui-li'>Portifolio</Link></li>
                        <li><Link to="blog" className='mobile-header-closer-ui-li'>Blog</Link></li>
                        <li><Link to="contact" className='mobile-header-closer-ui-li'>Contact</Link></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Mobile;
