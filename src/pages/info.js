import React from 'react';
import HeroSection from '../components/HeroSection.js';










function Info() {
  return (
    <>
    
    <HeroSection {...{  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Corona',
  headline: 'head',
  description:
    'asdasdasdasdasd',
  buttonLabel: 'For more info',
  imgStart: 'start',
  img: '',
  alt: 'Credit Card'}} />
    

       <HeroSection {...{  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Corona',
  headline: 'head',
  description:
    'asdasdasdasdasd',
  buttonLabel: 'For more info',
  imgStart: 'row-reverse',
  img: '',
  alt: 'Vault'}} />
    

     <HeroSection {...{  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'EASY SETUP',
  headline: 'Super fast and simple onboarding process',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: 'start',
  img: 'images/svg-7.svg',
  alt: 'Vault'}}/>
    
    </>

    
  
  );
}

export default Info;