
import React, { useEffect } from 'react';
import WorldMap from 'react-svg-worldmap';
import axios from 'axios';
import './map.css';



var data = [
  
];
const dataTemp = [];

// const getCountries = async () => {
//   var response = 
  
//   var data = response.data.data
//   return data;
// };


// const getCases  = async (countryId) => {
//   var response = await axios.get(`http://localhost:3000/api/countries/${countryId}`);
//   return response;
// };









function WereldMap() {
  
     const [clickedLocation, setClickedLocation] = React.useState();
  const [clickedAmount, setClickedAmount] = React.useState();
  const [nieuwCases, setNieuwCases] = React.useState();

  const handleLocationClick = (event) => {
    const cLocation = event.countryName;
    const amount = event.countryValue;
    const cases = event.countryAantal;
    setClickedLocation(cLocation);
    setClickedAmount(amount)
    setNieuwCases(cases)
    console.log("clickedLocationId",event);
    console.log("aantal",event.countryAantal)
    //window.open(this.links[clickedLocationId], "_blank");
  };

   
  //  getCountries.data.data.forEach(element => {
  //   console.log(element.name);
  //   var code = element.code
  //   // var countryId = element.id
    
  // data.push({country: code,value:1000});
      

  // });
    // console.log("data");
    // console.log(getCountries.then());
    // console.log("stop");
      
    
      async function fetchDataCountry(countryId) {
         const respone  = await axios.get(`http://localhost:3000/api/cases/${countryId}`);
         return  respone;
        
        
      }
     

 useEffect(() => {
   async function fetchData() {
     const response = await axios.get('http://localhost:3000/api/countries');
     
     
     for ( const element of response.data.data){
      var countryId = element.id 
      var countryIso = element.code
      //  value:await (await fetchDataCountry(countryId)).data[0].new_cases
      dataTemp.push({country:countryIso,value:100000})};
      // console.log(await (await fetchDataCountry(countryId)).data[0].new_cases);
    
     data = dataTemp;
     console.log("wait");
     console.log(data);
      
     
   }
   fetchData();
  //  var map = document.createElement("WorldMap");
 },[])




  
    









  

  // const width = Math.min(window.innerHeight, window.innerWidth) * 0.75;
 
   

  
  return (
    
    <div className = "container"> 
     <div className="map"><WorldMap  title="covid map" size="xxl" color="red"   data={data} onClickFunction={handleLocationClick}  richInteraction="true" /></div>
  
     <div className="info">
          <p>Clicked location: {clickedLocation}</p>
          <p>aantal covid: {clickedAmount}</p>
          <p>aantal nieuwe covid: {nieuwCases}</p>
     </div>
    </div>
   
  );
}

export default WereldMap;