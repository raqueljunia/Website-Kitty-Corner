import React from 'react';
import '../index.css';
import catHotel10 from '../assets/img/catHotel10.jpg';
import catHotel11 from '../assets/img/catHotel11.jpg';
import catHotel12 from '../assets/img/catHotel12.jpg';

const HotelPriceList = () => {
  return (
    <section className="price-list-section">
      <h2 className="section-title">KITTY CORNER ROOMS</h2>

      <div className="room-container">
        <div className="room-item">
          <div className="room-image">
            <img src={catHotel10} alt="Premium Room" />
            <div className="room-price">$150</div>
          </div>
          <p className="room-type">Premium Room</p>
          <ul className="service-list">
            <li>Spacious and comfortable accommodation</li>
            <li>Personalized care for your cat</li>
            <li>Delicious gourmet meals</li>
            <li>Access to premium amenities</li>
          </ul>
        </div>
        <div className="room-item">
          <div className="room-image">
            <img src={catHotel11} alt="Luxury Room" />
            <div className="room-price">$250</div>
          </div>
          <p className="room-type">Luxury Room</p>
          <ul className="service-list">
            <li>Luxurious and lavish living space</li>
            <li>24/7 dedicated staff for your cat's needs</li>
            <li>Customized menu and dietary options</li>
            <li>Exclusive access to spa and wellness services</li>
          </ul>
        </div>
        <div className="room-item">
          <div className="room-image">
            <img src={catHotel12} alt="Regular Room" />
            <div className="room-price">$100</div>
          </div>
          <p className="room-type">Regular Room</p>
          <ul className="service-list">
            <li>Comfortable and cozy accommodation</li>
            <li>Attentive care for your cat</li>
            <li>Standard meals provided</li>
            <li>Access to basic amenities</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HotelPriceList;
