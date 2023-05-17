import react from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselItem1 from '../../assets/img/bgSalon1.png'
import carouselItem2 from '../../assets/img/catGroom1.png'


const CarouselComponent = () => {
    return(
        <div>
        <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={carouselItem1}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={carouselItem2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
        </div>
    )
}

export default CarouselComponent;