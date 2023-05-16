import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import services1 from '../assets/img/services1.jpg';
import services2 from '../assets/img/services2.jpg';
import services3 from '../assets/img/services3.jpg';
import services4 from '../assets/img/services4.jpg';
import './ServicesSection.css'; 

const ServicesSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="services-section">
      <h1 className="text-white text-center">OUR SERVICES</h1>
      <Carousel classname="carousel-services" activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={services1}
            alt="First slide"
          />
          <Carousel.Caption>
          <Button className="btn-service-1 text-center align-item-center justify-content-center" variant="primary">
            <a href="/services/catSalon" className="text-decoration-none" style={{ color: 'rgb(255,255,255)' }}>
               Cat Salon
            </a>
          </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={services2}
            alt="Second slide"
          />

          <Carousel.Caption>
          <Button className="btn-service-2 text-center align-item-center justify-content-center" variant="primary">
            <a href="/services/catHotel" className="text-decoration-none" style={{ color: 'rgb(255,255,255)' }}>
               Cat Hotel
            </a>
          </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={services3}
            alt="Third slide"
          />

          <Carousel.Caption>
          <Button className="btn-service-3 text-center align-item-center justify-content-center" variant="primary">
            <a href="/services/catShop" className="text-decoration-none" style={{ color: 'rgb(255,255,255)' }}>
               Cat Shop
            </a>
          </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={services4}
            alt="Fourth slide"
          />

          <Carousel.Caption>
          <Button className="btn-service-4 text-center align-item-center justify-content-center" variant="primary">
            <a href="/services/catAdoption" className="text-decoration-none" style={{ color: 'rgb(255,255,255)' }}>
               Cat Adoption
            </a>
          </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ServicesSection;
