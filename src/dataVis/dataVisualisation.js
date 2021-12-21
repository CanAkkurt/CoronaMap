import React from 'react';

import * as cases from '../api/cases.js';

import ReactApexChart from 'react-apexcharts'
import { useEffect } from 'react';

function Graph(data) {
  
  const [dataCases,setDataCases] = React.useState([]);
  const [dataDate,setDataDate] = React.useState([]);
  const [dataCasesTotal,setDataCasesTotal] = React.useState([]);
  const [dataDeath,setDataDeath] = React.useState([]);
  const [dataTotalDeath,setDataTotalDeath] = React.useState([]);


  
  useEffect(()=>{
    if (data.data[0] !==undefined){
       const dataCase = [], dataDate = [],dataCasesTotal = [],dataDeath = [],dataTotalDeath = [];
       
       for(let i = data.data.length-1; i > 0;i--){
        
        dataCase.push(data.data[i].new_cases)
        dataDate.push(data.data[i].date)
        dataDeath.push(data.data[i].new_deaths)
        dataTotalDeath.push(data.data[i].total_deaths)
        dataCasesTotal.push(data.data[i].total_cases)
        
       }
       
       setDataCases(dataCase);
       setDataDate(dataDate);
       setDataDeath(dataDeath);
       setDataTotalDeath(dataTotalDeath)
       setDataCasesTotal(dataCasesTotal)
    
    
      }
    
    
  


  },[data])
   
  
   
  

  
  
  
  
  
   
  
  
  
  
  
  
  
  
   const series = [
    {
      name: "New Cases",
      data: dataCases,
    },
   
    {
      name: "New Deaths",
      data: dataDeath,
    },
    {
      name: "total Deaths",
      data: dataTotalDeath,
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
      categories: dataDate,
    },
    tooltip: {
      x: {
        format: "yy-MM-dd",
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
        height={500}
        
      />
      {/* <br />
      <ReactApexChart
       options={options}
        series={[44, 55, 41, 17, 15]}
        type="donut"
        height={200}
        
      /> */}
    </div>
  );
}

export default Graph;
