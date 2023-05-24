import React from 'react'; 
import Banner from '../components/banner/Banner'
import CarouselComponent from '../components/carousel/Carousel' 
import PriceList from '../components/pricelist/PriceList' 
import WhyChooseUs from '../components/whychooseus/WhyChooseUs'; 
import Book from '../components/bookcats/Book';

const CatSalon = () => {
  return (
    <div>
    <Banner/> 
    <CarouselComponent/> 
    <PriceList/> 
    <WhyChooseUs/> 
    <Book/> 
    </div>
  );
}

export default CatSalon;