import React from 'react';
import { CafeMenu } from "../components/CafeMenu";
import FooterComponent from '../components/FooterComponent';

const Cafe = () => {
  return (
    <div className='cafe-section'>
      <CafeMenu />
      <FooterComponent />
    </div>
  );
}

export default Cafe;