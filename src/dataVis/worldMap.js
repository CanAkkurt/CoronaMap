
import React, { useEffect, useState } from 'react';
import WorldMap from 'react-svg-worldmap';
import axios from 'axios';
import './worldMap.css';
import moment from 'moment';
import Graph from './dataVisualisation.js';
import { useCallback } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const dataMap = [];





function WereldMap() {
    

  const [startDate, setStartDate] = useState(new Date(2021,11,9));
   const [dataTest, setdataTest] = React.useState([]); 
  const [dataCase,setDataCase] = React.useState([]);
  
  // const [isLoading,setLoading] = React.useState();

  const [clickedLocation, setClickedLocation] = React.useState();
  const [clickedAmount, setClickedAmount] = React.useState();
  const [nieuwCases, setNieuwCases] = React.useState();
  
  
   
   const Example = () => {
     
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };

  
  
     
    
  
     useEffect(()=> {
      dataMap.length = 0;
  
     
    
 

      // var dateTest = startDate.getFullYear()+"-"+(startDate.getMonth()+1)+"-"+startDate.getDate();
      var dateTest = moment(startDate).format('YYYY-MM-DD')
      
      
      
      axios.get('http://localhost:3000/api/countries').then(response =>setdataTest(response.data.data));
      
      axios.get(`http://localhost:3000/api/cases/${dateTest}`).then(response =>setDataCase(response.data));
      

    },[startDate]);
    
   

  if(dataMap.length === 0){
     dataTest.forEach(element => {
      var id = element.id-1;
       if(typeof dataCase[id] === 'undefined') {
         
       }else {
         var casesValue = dataCase[id].new_cases;
         dataMap.push({country:element.code,value:casesValue})
       }
      
    });
  
   }

 

    
    



    
   

    
  

  

  // laat data zien wereldmap wanneer er op een land geklikt wordt
  const handleLocationClick = (event) => {
    
    const cLocation = event.countryName;
    const amount = event.countryValue;
    const cases = event.countryAantal;
    setClickedLocation(cLocation);
    setClickedAmount(amount)
    setNieuwCases(cases)
   
  };

 
   




  
  return (
    
    <div className = "container"> 
     <div className="map">
     <WorldMap data={dataMap}  size="responsive" color="red"    onClickFunction={handleLocationClick}  richInteraction="true" />
     <Example/>
     </div>
     <div className="info">
        <Graph/>
     </div>


     <div className="info">
          <p>Clicked location: {clickedLocation}</p>
          <p>aantal covid: {clickedAmount}</p>
          <p>aantal nieuwe covid: {nieuwCases}</p>
     </div>
    </div>
   
  );
}

export default WereldMap;