import React from 'react';
import blog01 from '../assets/images/blog01.jpg'

const Csss = () => {
  return (
    <div className='css'>
      <div className='box'>
      <div className='containers'>
        <img src={blog01}/>
        <div className="blog-grid-containers-content">
            <p className="blog-grid-container-content-p">Development</p>
            <h4 className="blog-grid-container-content-h4">
            Getting tickets to the big show
            </h4>
            <div className="blog-btn">
            <span>Read More</span>
            </div>
          </div>
      
      </div>
      </div>
    </div>
  )
}

export default Csss;
