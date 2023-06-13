import React from 'react';
import AdoptionHeader from '../components/AdoptionHeader';
import AdoptionText from '../components/AdoptionText';
import AdoptionReady from '../components/AdoptionReady';
import AdoptionForm from '../components/AdoptionForm';
import FooterComponent from '../components/FooterComponent';

const CatAdoption = () => {
  return (
    <div>
      <AdoptionHeader />
      <AdoptionText />
      <AdoptionReady />
      <AdoptionForm />
      <FooterComponent />
    </div>
  );
}

export default CatAdoption;