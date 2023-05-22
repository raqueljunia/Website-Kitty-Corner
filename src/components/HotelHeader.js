import React, { useState, useEffect } from 'react';
import catHotel1 from '../assets/img/catHotel1.jpg';
import catHotel5 from '../assets/img/catHotel5.jpg';
import catHotel6 from '../assets/img/catHotel6.jpg';
import '../index.css';

const HotelHeader = () => {
  const [currentImage, setCurrentImage] = useState(catHotel1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage === catHotel1) {
        setCurrentImage(catHotel5);
      } else if (currentImage === catHotel5) {
        setCurrentImage(catHotel6);
      } else {
        setCurrentImage(catHotel1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className="header-container">
      <div className="header-image">
        <img src={currentImage} alt="Cat Hotel" className="image-opacity" />
        <div className="overlay" />
        <div className="text-container">
          <h1 className="cat-hotel-title">CAT HOTEL</h1>
          <p className="by-kitty-corner">KITTY CORNER</p>
        </div>
      </div>
    </div>
  );
};

export default HotelHeader;
