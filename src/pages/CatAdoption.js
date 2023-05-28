import React from 'react';
import AdoptionHeader from '../components/AdoptionHeader';
import AdoptionText from '../components/AdoptionText';
import AdoptionReady from '../components/AdoptionReady';
import AdoptionForm from '../components/AdoptionForm';

const CatAdoption = () => {
  return (
    <div>
      <AdoptionHeader />
      <AdoptionText />
      <AdoptionReady />
      <AdoptionForm />
    </div>
  );
}

export default CatAdoption;