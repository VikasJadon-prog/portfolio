import React from "react";
import blog01 from '../assets/images/blog01.jpg';
import blog02 from '../assets/images/blog02.jpg';
import blog03 from '../assets/images/blog03.jpg'

const Blog = () => {
  return <div className="blog">
    <div className="blog-container">
      <div className="blog-inner-container">
        <h1 className="blog-inner-container-h1">
          Latest News
        </h1>
        <p className="blog-inner-container-h1-p">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>
      <div className='blog-grid'>
       <div className='blog-css'>
      <div className='blog-box'>
      <div className='blog-containers' style={{backgroundImage: `url(${blog01})`}}>
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
    <div className='blog-css'>
      <div className='blog-box'>
      <div className='blog-containers' style={{backgroundImage: `url(${blog02})`}}>
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
    <div className='blog-css'>
      <div className='blog-box'>
      <div className='blog-containers' style={{backgroundImage: `url(${blog03})`}}>
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
    </div>
    </div>

  </div>
};
export default Blog;