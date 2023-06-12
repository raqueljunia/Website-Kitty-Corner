import React from 'react';
import catAdoption3 from '../assets/img/catAdoption3.jpg';
import './CatAdoption.css';

const AdoptionText = () => {
  return (
    <div className="adoption-text-container">
      <div className="adoption-content">
        <h2 className="adoption-text-title">"A House is Not a Home Without a Furry Friend"</h2>
        <br></br>
        <p className="adoption-text-description">
          <strong>Welcome To Kitty Corner Adoption Center!</strong><br /><br />
          We believe a house becomes a home when filled with the love and companionship of a furry friend. 
          Adopt a cat, gain a lifelong companion, and provide a second chance at happiness for these adorable creatures.
        </p>
      </div>
      <div className="adoption-image-container">
        <img src={catAdoption3} alt="Cat Adoption 3" className="adoption-image" />
      </div>
    </div>
  );
};

export default AdoptionText;
