
import React from 'react';

import WorldMap from 'react-svg-worldmap';



const data = [
  {country: 'cn', value: 138961877}, // china
  {country: 'in', value: 1311559204}, // india
  {country: 'us', value: 331883986}, // united states
  {country: 'id', value: 264935824,aantal:121323}, // indonesia
  {country: 'pk', value: 210797836,aantal:121323}, // pakistan
  {country: 'br', value: 210301591,aantal:121323}, // brazil
  {country: 'ng', value: 208679114,aantal:121323}, // nigeria
  {country: 'bd', value: 161062905,aantal:121323}, // bangladesh
  {country: 'ru', value: 141944641,aantal:121323}, // russia
  {country: 'mx', value: 127318112,aantal:121323}, // mexico
];








function WereldMap() {

  
  const [clickedLocation, setClickedLocation] = React.useState();
  const [clickedAmount, setClickedAmount] = React.useState();


  const handleLocationClick = (event) => {
    const cLocation = event.countryName;
    const amount = event.countryValue
    setClickedLocation(cLocation);
    setClickedAmount(amount)
    console.log("clickedLocationId",event);
    console.log("aantal",event.countryAantal)
    //window.open(this.links[clickedLocationId], "_blank");
  };


 



  return (
    
    <div > 
     <WorldMap  title="covid map" size="xxl" color="red"   data={data} onClickFunction={handleLocationClick} frame="true" richInteraction="true" />
     <div className="locationName">
          Clicked location: {clickedLocation}
        </div>
        <div className="examples__block__info__item">
          aantal covid: {clickedAmount}
        </div>
    </div>
   
  );
}

export default WereldMap;