import React from 'react';
import HotelHeader from '../components/HotelHeader';
import HotelText from '../components/HotelText';
import HotelBookingForm from '../components/HotelBookingForm';
import HotelPriceList from '../components/HotelPriceList';
import FooterComponent from '../components/FooterComponent';


const CatHotel = () => {
  return (
    <div>
      <HotelHeader />
      <HotelText />
      <HotelPriceList />
      <HotelBookingForm />
      <FooterComponent />
    </div>
  );
};

export default CatHotel;
