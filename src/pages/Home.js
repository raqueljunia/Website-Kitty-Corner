import React from "react";
import Header from "../components/Header";
import HeroMain from "../components/HeroMain";
import ServicesSection from "../components/ServicesSection";
import FacilitiesSection from "../components/FacilitiesSection";
import ReviewsSection from "../components/ReviewsSection";
import GMap from "../components/GMap";

const Home = () => {
  return (
    <div>
    <Header />
    <HeroMain />
    <ServicesSection />
    <FacilitiesSection />
    <ReviewsSection />
    <GMap />
  </div>
  );
};

export default Home;