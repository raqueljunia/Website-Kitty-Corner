import React from 'react';
import catHotel1 from '../assets/img/catHotel1.jpg';
import catHotel2 from '../assets/img/catHotel2.jpg';
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
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard Accommodation</td>
              <td>$20 per day</td>
            </tr>
            <tr>
              <td>Luxury Suite</td>
              <td>$50 per day</td>
            </tr>
            <tr>
              <td>Playtime and Exercise</td>
              <td>$10 per session</td>
            </tr>
            <tr>
              <td>Grooming</td>
              <td>$30 per session</td>
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
