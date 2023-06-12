import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CatAdoption.css';

const AdoptionHeader = () => {
  const [headerImages, setHeaderImages] = useState([]);

  useEffect(() => {
    const loadRandomImages = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_HAxwNefneDdpcoczBQTWaLJvVqhEwwf0Wb9TlO5NAUCRRjZiR6H5fFARlC9zaKl5');
        const images = response.data;
        setHeaderImages(images);
      } catch (error) {
        console.error('Gagal memuat gambar dari API:', error);
      }
    };

    loadRandomImages();
  }, []);

  return (
    <header className="adoption-header">
      {headerImages.map((image, index) => (
        <img src={image.url} alt={`CatImage ${index}`} key={image.id} className="header-image" />
      ))}
      <div className="header-overlay" />
      <div className="header-text-container">
        <h1 className="header-title">CAT ADOPTION</h1>
        <p className="header-subtitle">KITTY CORNER</p>
      </div>
    </header>
  );
};

export default AdoptionHeader;
