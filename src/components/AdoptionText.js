import React from 'react';
import catAdoption2 from '../assets/img/catAdoption2.jpg';
import catAdoption3 from '../assets/img/catAdoption3.jpg';

const AdoptionText = () => {
  return (
    <div className="adoption-text-container">
      <div className="adoption-images">
        <img src={catAdoption2} alt="Cat Adoption 2" className="adoption-image" />
        <div className="adoption-content">
          <h2 className="adoption-text-title">A House is Not a Home Without a Furry Friend</h2>
          <p className="adoption-text-description">
            Welcome to our adoption center! We believe that a house becomes a home when it is filled
            with the love and companionship of a furry friend. Our mission is to find loving homes for
            abandoned and stray cats, and to match them with caring individuals or families. By
            adopting a cat, you not only gain a lifelong companion but also provide a second chance at
            happiness for these adorable creatures.
          </p>
        </div>
        <img src={catAdoption3} alt="Cat Adoption 3" className="adoption-image" />
      </div>
    </div>
  );
};

export default AdoptionText;
