import React from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

//<video src='/videos/ezgif.com-gif-maker.mp4' autoPlay loop muted />

function HeroSection() {
  return (
    
    <div className='hero-container'>
      <video src='/videos/ezgif.com-gif-maker.mp4' autoPlay loop muted />
      <h1>DECENTRALIZED UNIVERSITY</h1>
      <p>Take control of your trade.</p>
      <p>Real skills taught by experts from around the world</p>
      <p>Learn and earn*</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;