import React from 'react';
import './WhyChooseUs.css';
import CardSalon from '../../components/card-salon/CardSalon';
import leftCat from '../../assets/img/catBath.png';
import rightCat from '../../assets/img/grayCatSit.png';

const WhyChooseUs = () => {
  return (
    <div className='whychooseus-section'>
      <h1 className='whychooseus-header'>WHY OUR CAT SALON?</h1>
      <div className='cardcontainer'>
        <CardSalon
          title='EXPERIENCED'
          desc='Our team has years of experience in grooming cats of all breeds and temperaments.'
        />
        <CardSalon
          title='GENTLE'
          desc='We use gentle grooming techniques to ensure that your cat feels comfortable and relaxed during their visit.'
        />
        <CardSalon
          title='SAFE'
          desc='Our salon follows strict safety protocols to ensure that your cat is always in a safe and secure environment while in our care.'
        />
        <CardSalon
          title='EXPERT'
          desc="Our staff is trained and skilled in handling cats, providing expert grooming services that prioritize your cat's health and wellbeing."
        />
      </div>
      <img src={leftCat} alt='leftcat' className='left-cat' />
      <img src={rightCat} alt='rightcat' className='right-cat' />
    </div>
  );
};

export default WhyChooseUs;
