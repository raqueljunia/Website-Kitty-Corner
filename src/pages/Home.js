import React from "react";
import Header from "../components/Header";
import HeroMain from "../components/HeroMain";
import ServicesSection from "../components/ServicesSection";
import FacilitiesSection from "../components/FacilitiesSection";
import ReviewsSection from "../components/ReviewsSection";
import GMap from "../components/GMap";
import OpenHour from "../components/Open-hour";

const Home = () => {
  return (
    <div>
    <Header />
    <HeroMain />
    <ServicesSection />
    <FacilitiesSection />
    <ReviewsSection />
    <OpenHour/>
    <GMap />
  </div>
  );
};

export default Home;