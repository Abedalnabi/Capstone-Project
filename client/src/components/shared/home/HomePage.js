import React from 'react';
import HomeHeader from './sections/homeHeader/HomeHeader';
import SportSection from './sections/sportSection/SportSection';
import ContactUs from './sections/contact/ContactUs';

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <SportSection />
      <ContactUs />
    </>
  );
};

export default HomePage;
