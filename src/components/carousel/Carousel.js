import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselItem1 from '../../assets/img/catGroom1.png';
import carouselItem2 from '../../assets/img/catGroom2.png';
import carouselItem3 from '../../assets/img/catGroom3.png';
import carouselItem4 from '../../assets/img/catGroom4.png';
import carouselItem5 from '../../assets/img/catGroom5.png';

const CarouselComponent = () => {
  const carouselImageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    maxHeight: '600px', // Sesuaikan tinggi maksimal yang diinginkan
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
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={carouselItem3}
            alt="Second slide"
            style={carouselImageStyle}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={carouselItem4}
            alt="Second slide"
            style={carouselImageStyle}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={carouselItem5}
            alt="Second slide"
            style={carouselImageStyle}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
