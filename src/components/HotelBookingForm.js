import React, { useState } from 'react';
import '../index.css';

const HotelBookingForm = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numCats, setNumCats] = useState(1);

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  const handleNumCatsChange = (e) => {
    setNumCats(parseInt(e.target.value, 10));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Lakukan sesuatu setelah tombol Check Availability ditekan
    // Misalnya, panggil fungsi untuk memeriksa ketersediaan hotel berdasarkan input pengguna
    // atau tampilkan pesan bahwa pemesanan sedang diproses
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
        <label htmlFor="num-cats">Jumlah Kucing:</label>
        <input
          type="number"
          id="num-cats"
          min="1"
          value={numCats}
          onChange={handleNumCatsChange}
          required
        />
      </div>

      <button type="submit">Check Availability</button>
    </form>
  );
};

export default HotelBookingForm;
