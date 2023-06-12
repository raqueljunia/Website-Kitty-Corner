import React, { useState } from 'react';
import './CatHotel.css';

const CatHotel = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfCats, setNumberOfCats] = useState(0);
  const [roomType, setRoomType] = useState('');
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
    const phoneNumber = e.target.value.replace(/\D/, ''); // Remove non-numeric characters
    setPhoneNumber(phoneNumber);
  };

  const handleNumberOfCatsChange = (e) => {
    setNumberOfCats(parseInt(e.target.value));
  };

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
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
    if (name && email && phoneNumber && numberOfCats > 0 && roomType) {
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
                pattern="[0-9]*" // Allow only numeric characters
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="number-of-cats">Number of Cats:</label>
              <input
                type="number"
                id="number-of-cats"
                value={numberOfCats}
                onChange={handleNumberOfCatsChange}
                min={1}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="room-type">Room Type:</label>
              <select
                id="room-type"
                value={roomType}
                onChange={handleRoomTypeChange}
                required
              >
                <option value="">Select Room Type</option>
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
              </select>
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
