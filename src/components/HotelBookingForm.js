import React, { useState } from 'react';
import './CatHotel.css';

const HotelBookingForm = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numCats, setNumCats] = useState(1);
  const [roomType, setRoomType] = useState('Premium');

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  const handleNumCatsChange = (e) => {
    setNumCats(parseInt(e.target.value, 10));
  };

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="hotel-booking-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="check-in">Check-In:</label>
        <input
          type="date"
          id="check-in"
          value={checkIn}
          onChange={handleCheckInChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="check-out">Check-Out:</label>
        <input
          type="date"
          id="check-out"
          value={checkOut}
          onChange={handleCheckOutChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="num-cats">Cats:</label>
        <input
          type="number"
          id="num-cats"
          min="1"
          value={numCats}
          onChange={handleNumCatsChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="room-type">Room:</label>
        <select id="room-type" value={roomType} onChange={handleRoomTypeChange}>
          <option value="Regular">Regular</option>
          <option value="Premium">Premium</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      <button type="submit">Check Availability</button>
    </form>
  );
};

export default HotelBookingForm;
