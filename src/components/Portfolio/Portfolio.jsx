import React from 'react';
import './Portfolio.scss';
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
      <div>
        <div className="text-zone-portfolio">
          <h1 className='portfolio-title'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          <p className='paragraph-portfolio'>
            Hope you enjoy! :) 
          </p>
          <div className="contact-form"></div>
            
        </div>
      </div>
      <Loader type="ball-grid-beat" />
    </>
    );
};

export default Portfolio;