import React from 'react';
import ReactApexChart from 'react-apexcharts'


function GraphDonut(data) {
  
 
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
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true
          }
        }
      }
    },
    labels:["total deaths","total infected"]
  };
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
