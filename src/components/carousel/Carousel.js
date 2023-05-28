import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselItem1 from '../../assets/img/bgSalon1.png';
import carouselItem2 from '../../assets/img/catGroom1.png';

const CarouselComponent = () => {
  const carouselImageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    maxHeight: '700px', // Sesuaikan tinggi maksimal yang diinginkan
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={carouselItem1}
            alt="First slide"
            style={carouselImageStyle}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={carouselItem2}
            alt="Second slide"
            style={carouselImageStyle}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
