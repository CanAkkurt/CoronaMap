
import React, { useEffect, useState } from 'react';
import WorldMap from '../customizedLibrary/react-svg-worldmap/dist';
import axios from 'axios';
import './worldMap.css';
import moment from 'moment';
import Graph from '../dataVis/dataVisualisation.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Country from "flagit";
import * as cases from '../api/cases.js';
import { login } from '../api/users';
import GraphDonut from '../components/GraphDonut';

function WereldMap() {
    
  const dataMap = []
  const [startDate, setStartDate] = useState(new Date(2021,11,9));
  const [dataTest, setdataTest] = React.useState([]); 
  const [dataCase,setDataCase] = React.useState([]);
  const [clickedLocation, setClickedLocation] = React.useState();
  const [clickedAmount, setClickedAmount] = React.useState();
  const [totalCases, setTotalCases] = React.useState();
  const [totalDeaths, setTotalDeaths] = React.useState();
  const [newDeaths, setNewDeaths] = React.useState();
  const [mapIso,setMapIso] = React.useState("");
  const [data7,setData7] = React.useState([]);
  const [dataDonut,setDataDonut] = React.useState([100,20,30,40]);
  
   
  const Example = () => {
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };


  
 

  useEffect(()=>{
      cases.casesBetween("2021-03-21","2021-12-10").then(function(result){
         setData7(result.data)
    
     })
     axios.get('http://localhost:3000/api/countries').then(response =>setdataTest(response.data.data));
  },[])
  
  
  useEffect(()=> {
    dataMap.length = 0;
    var dateTest = moment(startDate).format('YYYY-MM-DD')
    
    axios.get(`http://localhost:3000/api/cases/${dateTest}`).then(response =>setDataCase(response.data));
      
  },[startDate]);
  
  
   
  
   
  if(dataMap.length === 0){
     dataTest.forEach(element => {
      var id = element.id-1;
       if(typeof dataCase[id] === 'undefined') {
       }else {
         var casesValue = dataCase[id].new_cases;
         var newDeaths = parseInt(dataCase[id].new_deaths);
         var totalCases = dataCase[id].total_cases;
         var totalDeath = parseInt(dataCase[id].total_deaths);
         dataMap.push({country:element.code,value:casesValue,newDeaths:newDeaths,totalCases:totalCases,totalDeaths:totalDeath})
       }
      
    });
  
   }

 
 
    
    



    
   

    
  

  

  // laat data zien wereldmap wanneer er op een land geklikt wordt
  const handleLocationClick = (event) => {
    
    
    const amount = event.countryValue;
    const totalDeaths = event.totalDeaths;
    const newDeaths = event.newDeaths;
    const totalCases = event.totalCases;
    const iso = event.countryCode
    const dataDonut = [amount,newDeaths]
    setDataDonut(dataDonut);
    console.log(dataDonut);
    setClickedLocation(event.countryName);
    setClickedAmount(amount)
    setNewDeaths(newDeaths);
    setTotalDeaths(totalDeaths);
    setTotalCases(totalCases)
    setMapIso(iso)
    
   
  };
  
 
  
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
        </div><GraphDonut data={dataDonut}/>
        <div className="info">
          <h3>Country: {clickedLocation}</h3>
          <h3>New covid cases: {clickedAmount}</h3>
          <h3>total covid cases: {totalCases}</h3>
          <h3>new deaths: {newDeaths}</h3>
          <h3>total deaths: {totalDeaths}</h3>
          <div classname="backgroundFlag">
          <Country countryShort={mapIso} size="xxl" />
          </div>
        </div>
        
        
         
        
        
     
     </div>
     </div>



      <div className="dataVis">
        <Graph data={data7}/>
    
     </div>
         



    </div>
   
  );
}




export default WereldMap;




