import React, { useState } from 'react';
import './CatHotel.css';

const CatHotel = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [availabilityData, setAvailabilityData] = useState([]);

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (checkIn && checkOut) {
      // Generate random availability data
      const regularAvailability = Math.floor(Math.random() * 51);
      const premiumAvailability = Math.floor(Math.random() * 21);
      const luxuryAvailability = Math.floor(Math.random() * 6);

      // Set availability data
      setAvailabilityData([
        { roomType: 'Regular', availability: regularAvailability },
        { roomType: 'Premium', availability: premiumAvailability },
        { roomType: 'Luxury', availability: luxuryAvailability },
      ]);

      setShowForm(true);
    }
  };

  const handleBookRoom = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (name && email && phoneNumber) {
      // Send verification email here
      setShowNotification(true);
    }
  };

  return (
    <div className="hotel-booking-form">
      <form onSubmit={handleFormSubmit}>
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

        <button type="submit">Check Availability</button>
      </form>

      {availabilityData.length > 0 && (
        <div className="availability-table">
          <h2>Room Availability</h2>
          <table>
            <thead>
              <tr>
                <th>Room Type</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {availabilityData.map((data) => (
                <tr key={data.roomType}>
                  <td>{data.roomType}</td>
                  <td>{data.availability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <div className="booking-form">
          <h2>Booking Details</h2>
          <form onSubmit={handleBookRoom}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone-number">Phone Number:</label>
              <input
                type="tel"
                id="phone-number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>

            <button type="submit">Book Your Room</button>
          </form>
        </div>
      )}

      {showNotification && (
        <div className="notification">
          A Verification Email has been Sent to Your Account
        </div>
      )}
    </div>
  );
};

export default CatHotel;
