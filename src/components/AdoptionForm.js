import React, { useState } from 'react';
import './CatAdoption.css';

const AdoptionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [catName, setCatName] = useState('');
  const [isRequestProcessed, setIsRequestProcessed] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value.replace(/[^0-9]/g, '');
    setPhone(phoneValue);
  };

  const handleCatNameChange = (e) => {
    setCatName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (name && email && phone && catName) {
      // Process the request
      setIsRequestProcessed(true);
    }
  };

  return (
    <div className="adoption-form-container">
      <form className="adoption-form" onSubmit={handleFormSubmit}>
        <h2>Adoption Form</h2>

        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Your Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            inputMode="numeric" // Hanya menerima input angka
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cat-name">Cat Name:</label>
          <select
            id="cat-name"
            value={catName}
            onChange={handleCatNameChange}
            required
          >
            <option value="">Select cat</option>
            <option value="Kitty">Kitty</option>
            <option value="Whiskers">Whiskers</option>
            <option value="Mittens">Mittens</option>
          </select>
        </div>

        <button type="submit">Send Request</button>

        {isRequestProcessed && (
          <p className="request-processed-label">Request has been processed</p>
        )}
      </form>
    </div>
  );
};

export default AdoptionForm;
