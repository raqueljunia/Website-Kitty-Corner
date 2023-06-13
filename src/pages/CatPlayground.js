import React from 'react';
import PlayGroundHeader from '../components/PlayGroundHeader';
import PlayGroundContent from '../components/PlayGroundContent';
import FooterComponent from '../components/FooterComponent';

const CatPlayground = () => {
  return (
    <div className="playground">
      <PlayGroundHeader />
      <PlayGroundContent />
      <FooterComponent />
    </div>
  );
}

export default CatPlayground;
