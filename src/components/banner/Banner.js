import React from 'react';
import './Banner.css';
import headerSalon from "../../assets/img/5cats.png";

const Banner = () => {
  return (
    <div className='bannerSalon'>
      <div className='banner'>
        <div className='banner-title'>
            <h3>KITTY CORNER</h3>
            <h1>CAT SALON</h1>
        </div>
        <div className="image-container">
          <img src={headerSalon} alt="Header Img" className="banner-img" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
