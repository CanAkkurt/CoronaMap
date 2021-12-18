import React from 'react';

import * as cases from '../api/cases.js';

import ReactApexChart from 'react-apexcharts'
import { useEffect } from 'react';

function Graph(data) {
  
  const [dataCases,setDataCases] = React.useState([]);


  
  useEffect(()=>{
    if (data.data[0] !==undefined){
       console.log("data vis----------------------");
       const dataCase = []
       
       for(let i = data.data.length-1; i > 0;i--){
        
        dataCase.push(data.data[i].total_cases)
        
        
       }
       
       setDataCases(dataCase)
       
    
    
    
      }
    
    
  


  },[data])
   
  
   console.log(dataCases);
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
   const series = [
    {
      name: "Cases",
      data: dataCases,
    },
    {
      name: "Recovered",
      data: [28, 284, 9394, 42710, 76026, 191853, 501538, 1029651, 1255481],
    },
    {
      name: "Deaths",
      data: [17, 259, 1666, 2996, 6472, 49675, 140658, 238619, 269567],
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/22/20",
        "2/1/20",
        "2/15/20",
        "3/1/20",
        "3/15/20",
        "4/1/20",
        "4/15/20",
        "5/1/20",
        "5/7/20",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>COVID-19 Global Graphs</h2>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={200}
        
      />
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={200}
        
      />
    </div>
  );
}

export default Graph;
