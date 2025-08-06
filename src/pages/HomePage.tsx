import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedCourses from '../components/FeaturedCourses';
import CareerPaths from '../components/CareerPaths';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import MobileApp from '../components/MobileApp';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <FeaturedCourses />
      <CareerPaths />
      <Pricing />
      <WhyChooseUs />
      <Testimonials />
      <MobileApp />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default HomePage;