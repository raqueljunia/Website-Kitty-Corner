import React from 'react';
import GMap, { CafeMenu } from "../components/CafeMenu";

const Cafe = () => {
  return (
    <div className='cafe-section'>
      <h1>Cafe</h1>
      <p>Cafe page.</p>
      <CafeMenu />
    </div>
  );
}

export default Cafe;