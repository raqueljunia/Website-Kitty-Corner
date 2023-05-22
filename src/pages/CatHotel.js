import React from 'react';
import HotelHeader from '../components/HotelHeader';
import HotelText from '../components/HotelText';
import HotelBookingForm from '../components/HotelBookingForm';
import HotelPriceList from '../components/HotelPriceList';

const CatHotel = () => {
  return (
    <div>
      <HotelHeader />
      <HotelText />
      <HotelPriceList />
      <HotelBookingForm />
    </div>
  );
};

export default CatHotel;
