import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import CatSalon from './pages/CatSalon';
import CatHotel from './pages/CatHotel';
import CatShop from './pages/CatShop';
import CatAdoption from './pages/CatAdoption';
import Cafe from './pages/Cafe';
import CatPlayground from './pages/CatPlayground';
import AboutUs from './pages/AboutUs';
import BookPage from './pages/BookPage';

function App() {
  return (
      <div className="App">
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services/catSalon" element={<CatSalon />} />
        <Route path="/services/catHotel" element={<CatHotel />} />
        <Route path="/services/catShop" element={<CatShop />} />
        <Route path="/services/catAdoption" element={<CatAdoption />} />
        <Route path="/facilities/cafe" element={<Cafe />} />
        <Route path="/facilities/catPlayground" element={<CatPlayground />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/bookonline" element={<BookPage />}/>
        <Route path="/catSalon" element={<CatSalon />}/>
      </Routes>
      </div>
  );
}

export default App;