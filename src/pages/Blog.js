import React from "react";
import blog01 from '../assets/images/blog01.jpg'
import blog02 from '../assets/images/blog02.jpg';
import blog03 from '../assets/images/blog03.jpg';

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
          <div>
            <a>
              <img className="blogimg" src={blog01} alt="blog-sgrid-img" />
            </a>
          </div>
          <div className="blog-grid-containers-content">
            <p className="blog-grid-container-content-p">Development</p>
            <h4 className="blog-grid-container-content-h4">
              <a className="blog-grid-container-content-h4-a">
                Getting tickets to the big show
              </a>
            </h4>
            <div className="blog-btn">
              <a className="blog-btn-a">
                Read More
              </a>
            </div>
          </div>

        </div>
        <div className="blog-grid-containers">
          <div>
            <a>
              <img className="blogimg" src={blog02} alt="blog-sgrid-img" />
            </a>
          </div>
          <div className="blog-grid-containers-content">
            <p className="blog-grid-container-content-p">Development</p>
            <h4 className="blog-grid-container-content-h4">
              <a className="blog-grid-container-content-h4-a">
                Getting tickets to the big show
              </a>
            </h4>
            <div className="blog-btn">
              <a className="blog-btn-a">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="blog-grid-containers">
          <div>
            <a>
              <img className="blogimg" src={blog03} alt="blog-sgrid-img" />
            </a>
          </div>
          <div className="blog-grid-containers-content">
            <p className="blog-grid-container-content-p">Development</p>
            <h4 className="blog-grid-container-content-h4">
              <a className="blog-grid-container-content-h4-a">
                Getting tickets to the big show
              </a>
            </h4>
            <div className="blog-btn">
              <a className="blog-btn-a">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
};

export default Blog;