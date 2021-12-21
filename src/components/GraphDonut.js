import React from 'react';

import * as cases from '../api/cases.js';

import ReactApexChart from 'react-apexcharts'
import { useEffect } from 'react';

function GraphDonut(data) {
  
 
  
  
   const series = [{covid:34}, 55, 41, 17, 15];
   const labels = [ 'covid', 'E']
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
   
    tooltip: {
      x: {
        format: "yy-MM-dd",
      },
    },
  };
 
  // console.log(data.data);
   
  return (
    <div>
     
      <ReactApexChart
       options={options}
        series={data.data}
        labels={labels}
        type="donut"
        width="400"
        />
      
    </div>
  );
}

export default GraphDonut;
