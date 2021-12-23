import React from 'react';
import HeroSection from '../components/HeroSection.js';
import CoronaBlank from '../images/CoronaBlank.png'
import Prevention from '../images/Prevention.png'
import Spread from '../images/Spread.png'







function Info() {

  return ( <
    >

    <
    HeroSection {
      ...{
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: 'What is Covid19?',
        headline: '',
        description: 'Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.',
        linkButton: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019',
        buttonLabel: 'For more info',
        imgStart: 'start',
        img: CoronaBlank,
        alt: 'Credit Card'
      }
    }
    />


    
   <HeroSection {
      ...{
        lightBg: false,
        lightText: true,
        lightTextDesc: true,
        topLine: 'How to prevent it',
        headline: '',
        description: <h4> 
          So far,
        the best actions to take to slow the transmission of COVID - 19 include:

          Social distancing(maintain a distance of 6 feet between yourself and others)
        Stay at home Avoid touching your face Wash your hands frequently with soap
        for 20 seconds each time Wear a cloth mask 
        </h4>,

        linkButton: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019',
        buttonLabel: 'For more info',
        imgStart: 'we',

        img: Prevention,
        alt: 'Vault'
      }
    }
    />


    
   < HeroSection {
      ...{
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: 'How it spreads',
        description: 'The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.',
        linkButton: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019',
        buttonLabel: 'For more info',
        imgStart: 'start',
        img: Spread,
        alt: 'Vault'
      }
    }
    />

    </>
  );
}

export default Info;