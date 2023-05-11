import React from 'react';

import NavbarComponent from './components/NavbarComponent';
import Header from './components/Header';
import HeroMain from './components/HeroMain';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
    <NavbarComponent />
    <Header />
    <HeroMain />
    <Services />
    <Facilities />
    <Reviews />
    <Footer />
    </div>
  );
};

export default App;
