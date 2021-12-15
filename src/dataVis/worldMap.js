
import React, { useEffect, useState } from 'react';
import WorldMap from 'react-svg-worldmap';
import axios from 'axios';
import './worldMap.css';
import moment from 'moment';
import Graph from './dataVisualisation.js';
import { useCallback } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

  







function WereldMap() {
    

  const [startDate, setStartDate] = useState(new Date(2021,11,9));
   const [dataTest, setdataTest] = React.useState([]); 
  const [dataCase,setDataCase] = React.useState([]);
  const [dataMap,setDataMap] = React.useState([]);
  
  // const [isLoading,setLoading] = React.useState();

  const [clickedLocation, setClickedLocation] = React.useState();
  const [clickedAmount, setClickedAmount] = React.useState();
  const [nieuwCases, setNieuwCases] = React.useState();
  const [totalCases, setTotalCases] = React.useState();
  const [totalDeaths, setTotalDeaths] = React.useState();
  const [newDeaths, setNewDeaths] = React.useState();
  
   
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

         var newDeaths = parseInt(dataCase[id].new_deaths)
         var totalCases = dataCase[id].total_cases
         var totalDeaths = dataCase[id].total_deaths

        //  var vaccinations = dataCase[id].
         console.log(newDeaths);
         dataMap.push({country:element.code,value:casesValue,newDeaths:newDeaths,totalCases:totalCases,totalDeaths:totalDeaths})
       }
      
    });
  
   }

 console.log(dataCase);
  // console.log(dataMap);
    
    



    
   

    
  

  

  // laat data zien wereldmap wanneer er op een land geklikt wordt
  const handleLocationClick = (event) => {
    
    const cLocation = event.countryName;
    const amount = event.countryValue;
    const totalDeaths = event.totalDeaths;
    const newDeaths = event.newDeaths;
    const totalCases = event.totalCases;


    console.log(event);
    setClickedLocation(cLocation);
    setClickedAmount(amount)
    setNewDeaths(newDeaths);
    setTotalDeaths(totalDeaths);
    setTotalCases(totalCases)
   
  };

 
   
  
  const width = Math.min(window.innerHeight, window.innerWidth) * 0.75;


  
  return (
    
    <div className = "container"> 
    <div className="upperBody">
    <div className="datePicker">
      <div className="space"></div>
    <Example/>
    </div>
     <div className="mapInfoContainer">
        <div className="mapDiv">
          <WorldMap data={dataMap}  size="responsive" color="#c90000"   onClickFunction={handleLocationClick}  richInteraction="true" />
        </div>
        <div className="info">
          <h3>Country: {clickedLocation}</h3>
          <h3>covid cases: {clickedAmount}</h3>
          <h3>total cases: {totalCases}</h3>
          <h3>new deaths: {newDeaths}</h3>
          <h3>total deaths: {totalDeaths}</h3>
        </div>
     
     </div>
     </div>



      <div className="dataVis">
        <Graph/>
    
     </div>
         



    </div>
   
  );
}




export default WereldMap;




