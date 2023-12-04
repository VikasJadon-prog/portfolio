import React from "react";
import thumb from "../assets/images/thumb.png";
import AboutTabs from "../Components/AboutTabs"

const About = () => {
  return (

  
  <div className="about">
        <div className="about-container">
          <div className="about-thumbnail">
            <img src={thumb} alt="digital" className="thumb-img" />
          </div>
          <div className="about-inner-inner">
            <div className="about-title">
              <h2 className="about-title-title">About Me</h2>
              <p className="about-description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
            </div>
           <div>
           <AboutTabs/>
           </div>
          </div>
        </div>
      </div>
  )
};

export default About;   