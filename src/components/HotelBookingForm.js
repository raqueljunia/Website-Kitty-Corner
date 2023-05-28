import React, { useState } from 'react';
import './CatHotel.css';

const HotelBookingForm = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numCats, setNumCats] = useState(1);
  const [roomType, setRoomType] = useState('Premium');
  const [showAvailability, setShowAvailability] = useState(false);
  const [availabilityData, setAvailabilityData] = useState([]);

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

    // Show availability
    setShowAvailability(true);
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
          <select
            id="room-type"
            value={roomType}
            onChange={handleRoomTypeChange}
          >
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        <button type="submit">Check Availability</button>
      </form>

      {showAvailability && (
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
    </div>
  );
};

export default HotelBookingForm;
