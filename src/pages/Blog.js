import React from "react";
import blog01 from '../assets/images/blog01.jpg';

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
      <div className="blog-grid">
        <div className="blog-grid-containers">
         <div className="blog-grid-containers-container">
         <div className="blog-grid-containers-content">
            <p className="blog-grid-container-content-p">Development</p>
            <h4 className="blog-grid-container-content-h4">
              <a className="blog-grid-container-content-h4-a" href="xyz" >
                Getting tickets to the big show
              </a>
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
};
export default Blog;