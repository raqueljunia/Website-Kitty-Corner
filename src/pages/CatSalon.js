import React from 'react'; // Import React dari Library React
import Banner from '../components/banner/Banner' // Import Banner dari KOmponen Banner
import CarouselComponent from '../components/carousel/Carousel' // Import Carousel dari Komponen Carousel
import PriceList from '../components/pricelist/PriceList' // Import PriceList dari Komponen PriceList
import WhyChooseUs from '../components/whychooseus/WhyChooseUs'; // Import Komponen WhyChooseUs dari Komponen WhyChooseUs
import Book from '../components/bookcats/Book'; // Import Book dari Komponen Book

// Membuat halaman CatSalon
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

// Export Halaman CatSalon
export default CatSalon;