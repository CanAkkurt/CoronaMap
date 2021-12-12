


import React from 'react';

import '../App.css';
import WereldMap  from '../dataVis/worldMap.js';
// import Graph from '../dataVis/dataVisualisation.js';

function mainPage() {

  



  return (
  
     <div className="container">
       <div className="logo">

       </div>
       {/* <div><Graph/></div>        */}
       <div className="content"><WereldMap/></div>
       <div className="footer">Covid Map</div>
     </div>
     
  );
}

export default mainPage;