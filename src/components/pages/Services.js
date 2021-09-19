import React from 'react';
import '../../App.css';
import HeroSectionServices from '../HeroSectionServices';
import Footer from '../Footer';

/***
export default function Services() {
  return <h1 className='services'>SERVICES</h1>;
  
}
 */
function services() {
  return (
    <div>
      <HeroSectionServices />

      <Footer />
    </div>
  );
}

export default services;