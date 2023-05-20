import React, { useState, useEffect } from 'react';
import catHotel1 from '../assets/img/catHotel1.jpg';
import catHotel2 from '../assets/img/catHotel2.jpg';
import catHotel5 from '../assets/img/catHotel5.jpg';
import catHotel6 from '../assets/img/catHotel6.jpg';
import '../index.css';

const CatHotel = () => {
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
    <div className="cat-hotel-container">
      <div className="cat-hotel-image">
        <img src={currentImage} alt="Cat Hotel" />
        <div className="text-container">
          <h1 className="cat-hotel-title">Cat Hotel</h1>
          <p className="by-kitty-corner">by Kitty Corner</p>
        </div>
      </div>
      <div className="additional-content">
        <div className="text-content">
          <h2 className="welcome-text">Welcome to Pet Hotel by Kitty Corner!</h2>
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
        <table className="price-list-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Price per day</th>
              <th>Price per week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard</td>
              <td>IDR 200.000</td>
              <td>IDR 1.000.000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>IDR 300.000</td>
              <td>IDR 1.500.000</td>
            </tr>
            <tr>
              <td>Luxury</td>
              <td>IDR 500.000</td>
              <td>IDR 2.500.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="feature-list">
        <h3>Features:</h3>
        <ul>
          <li>24/7 supervision by trained staff</li>
          <li>Indoor and outdoor play areas</li>
          <li>Customized meal plans</li>
          <li>Medical care and administration of medication</li>
          <li>Complimentary grooming services</li>
        </ul>
      </div>
      <div className="book-now">
        <h3>Book Now!</h3>
        <button className="book-now-button">Book Online</button>
        <p className="contact-info">Contact us at: +1-123-456-7890</p>
      </div>
    </div>
  );
}

export default CatHotel;
