import React from 'react';
import '../index.css';
import catHotel7 from '../assets/img/catHotel7.jpg';
import catHotel8 from '../assets/img/catHotel8.jpg';
import catHotel9 from '../assets/img/catHotel9.jpg';

const HotelText = () => {
  return (
    <div className="hotel-text-container">
      <div className="hotel-image-row">
        <div className="hotel-image-column">
          <img src={catHotel7} alt="Cat Hotel 7" />
          <p className="hotel-image-caption">Guaranteed Comfort</p>
          <p className="hotel-image-description">Luxurious accommodations that ensure<br></br>your cat's comfort<br></br>throughout their stay.</p>
        </div>
        <div className="hotel-image-column">
          <img src={catHotel8} alt="Cat Hotel 8" />
          <p className="hotel-image-caption">Expert Care</p>
          <p className="hotel-image-description">Dedicated and experienced staff<br></br>providing personalized care and attention<br></br>to your cat.</p>
        </div>
        <div className="hotel-image-column">
          <img src={catHotel9} alt="Cat Hotel 9" />
          <p className="hotel-image-caption">Premium Amenities</p>
          <p className="hotel-image-description">First-class amenities including<br></br>grooming, play areas,and delicious meals<br></br>for your cat's enjoyment.</p>
        </div>
      </div>
    </div>
  );
};

export default HotelText;
