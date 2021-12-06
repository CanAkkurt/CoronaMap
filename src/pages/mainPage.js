

import React from 'react';

import '../App.css';
import WereldMap  from '../belgium/belgiumMap.js';


function mainPage() {

  return (
    
     <div className="container">
       <div className="logo">

       </div>

       <div className="content"><WereldMap/></div>
       <div className="footer">Covid Map</div>
     </div>
     
  );
}

export default mainPage;