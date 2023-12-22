import React from "react";
import img1 from '../assets/images/portfolio-1.jpg';
import img2 from '../assets/images/portfolio-2.jpg';
import img3 from '../assets/images/portfolio-3.jpg';
import img4 from '../assets/images/portfolio-4.jpg';

const Portifolio = () => {

  return <div className="portifolio">
    <div className="portifolio-container">
      <div className="portifolio-inner-container">
        <h1 className="portifolio-inner-container-h1">
          My Latest Project
        </h1>
        <p className="portifolio-inner-container-h1-p">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
      </div>
      <div className='portfolio-grid'>
        <div className='port-css'>
          <div className='port-box'>
            <div className='port-containers' style={{ backgroundImage: `url(${img1})` }}>
              <div className="portifolio-grid-container-inner">
                <div className="portifolio-grid-container-inner-content">
                  <p className="portifolio-grid-container-inner-content-p">
                    Development
                  </p>
                  <h3 className="portifolio-grid-container-inner-content-h3">
                    Getting tickets to the big show
                  </h3>
                </div>
                <div className="portifolio-grid-container-inner-btn">
                  <span>VIEW DETAILS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='port-css'>
          <div className='port-box'>
            <div className='port-containers' style={{ backgroundImage: `url(${img2})` }}>
              <div className="portifolio-grid-container-inner">
                <div className="portifolio-grid-container-inner-content">
                  <p className="portifolio-grid-container-inner-content-p">
                    Development
                  </p>
                  <h3 className="portifolio-grid-container-inner-content-h3">
                    Getting tickets to the big show
                  </h3>
                </div>
                <div className="portifolio-grid-container-inner-btn">
                  <span>VIEW DETAILS</span>
                </div>
              </div>

            </div>

          </div>

        </div>
        <div className='port-css'>
          <div className='port-box'>
            <div className='port-containers' style={{ backgroundImage: `url(${img3})` }}>
              <div className="portifolio-grid-container-inner">
                <div className="portifolio-grid-container-inner-content">
                  <p className="portifolio-grid-container-inner-content-p">
                    Development
                  </p>
                  <h3 className="portifolio-grid-container-inner-content-h3">
                    Getting tickets to the big show
                  </h3>
                </div>
                <div className="portifolio-grid-container-inner-btn">
                  <span>VIEW DETAILS</span>
                </div>
              </div>

            </div>

          </div>

        </div>
        <div className='port-css'>
          <div className='port-box'>
            <div className='port-containers' style={{ backgroundImage: `url(${img4})` }}>
              <div className="portifolio-grid-container-inner">
                <div className="portifolio-grid-container-inner-content">
                  <p className="portifolio-grid-container-inner-content-p">
                    Development
                  </p>
                  <h3 className="portifolio-grid-container-inner-content-h3">
                    Getting tickets to the big show
                  </h3>
                </div>
                <div className="portifolio-grid-container-inner-btn">
                  <span>VIEW DETAILS</span>
                </div>
              </div>

            </div>

          </div>

        </div>
        <div className='port-css'>
          <div className='port-box'>
            <div className='port-containers' style={{ backgroundImage: `url(${img3})` }}>
              <div className="portifolio-grid-container-inner">
                <div className="portifolio-grid-container-inner-content">
                  <p className="portifolio-grid-container-inner-content-p">
                    Development
                  </p>
                  <h3 className="portifolio-grid-container-inner-content-h3">
                    Getting tickets to the big show
                  </h3>
                </div>
                <div className="portifolio-grid-container-inner-btn">
                  <span>VIEW DETAILS</span>
                </div>
              </div>

            </div>

          </div>

        </div>
        <div className='port-css'>
          <div className='port-box'>
            <div className='port-containers' style={{ backgroundImage: `url(${img4})` }}>
              <div className="portifolio-grid-container-inner">
                <div className="portifolio-grid-container-inner-content">
                  <p className="portifolio-grid-container-inner-content-p">
                    Development
                  </p>
                  <h3 className="portifolio-grid-container-inner-content-h3">
                    Getting tickets to the big show
                  </h3>
                </div>
                <div className="portifolio-grid-container-inner-btn">
                  <span>VIEW DETAILS</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
      <div className="viewMore-btn">
        VIEW DETAILS
      </div>
    </div>
  </div>
};

export default Portifolio;