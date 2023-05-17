import React from 'react';
import catHotel1 from '../assets/img/catHotel1.jpg';
import catHotel2 from '../assets/img/catHotel2.jpg';
import priceListImage from '../assets/img/PriceListHotel.jpg';
import '../index.css';

const CatHotel = () => {
  return (
    <div className="cat-hotel-container">
      <div className="cat-hotel-image">
        <img src={catHotel1} alt="Cat Hotel" />
        <div className="text-container">
          <h1 className="cat-hotel-title">Cat Hotel by Kitty Corner</h1>
        </div>
      </div>
      <div className="additional-content">
        <div className="text-content">
          <h2 className="welcome-text">Welcome to Cat Hotel by Kitty Corner!</h2>
          <p className="description-text">
            We are a high-quality pet hotel that offers comfortable and safe care for your beloved cats.
          </p>
        </div>
        <div className="additional-image">
          <img src={catHotel2} alt="Additional Cat Hotel" />
        </div>
      </div>
      <div className="price-list">
        <h2 className="price-list-title">Price List</h2>
        <img src={priceListImage} alt="Price List Hotel" className="price-list-image" />
      </div>
    </div>
  );
}

export default CatHotel;
