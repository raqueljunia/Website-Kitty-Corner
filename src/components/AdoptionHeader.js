import React from 'react';
import '../index.css';
import catAdoptionHeader from '../assets/img/catAdoption1.jpg';

const AdoptionHeader = () => {
  return (
    <header className="adoption-header">
      <img src={catAdoptionHeader} alt="Cat Adoption" className="header-image" />
      <div className="header-overlay" />
      <div className="header-text-container">
        <h1 className="header-title">Cat Adoption</h1>
        <p className="header-subtitle">Find Your Perfect Feline Companion</p>
        <button className="header-button">Explore Now</button>
      </div>
    </header>
  );
};

export default AdoptionHeader;
