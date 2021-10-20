import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container mb-5">
          <div className="banner">
          <div className="row d-flex banner align-items-center justify-content-center">
          
          <div className="col-md-6">
          <h1 className="title">
           We Care For Your Health <br /> Every Moment
          </h1>
          <p className="ttf text-white text-center mt-3 p-2">
          Every Day We Being Hope & Smile To The Patient We Serve.
          </p>
          <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6"></div>
          </div>
          </div>
        </div>
      );
    };

export default Banner;