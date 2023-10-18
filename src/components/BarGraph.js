import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';


    
const BarGraph = () => {
 const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        
        data: [6, 4, 12, 8, 10, 7, 9, 16, 4, 13, 10, 12],
        backgroundColor: 'grey',
        barPercentage: 0.9,
        categoryPercentage: 1,
        catagorySpacing:0,
        borderWidth: 1,
        hoverBackgroundColor: 'blue',
        
      },
    ],
 };
 const [highlightedIndex, setHighlightedIndex] = useState(null);
 const options = {
    scales: {
        x: {
            display: true,
            grid: {
              display: false, 
            },
          },
      y: {
        beginAtZero: true,
        display: false,
      },
    },
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false,
      },
    },
    events: ['click'],
    onHover: (event, chartElement) => {
      if (chartElement.length > 0) {
        console.log(chartElement)
        setHighlightedIndex(chartElement[0].dataIndex);
      } else {
        setHighlightedIndex(null);
      }
    },
    layout: {
       padding: {
        borderRadius:2,
        left: 0,
        right: 10,
        top: 0,
        bottom: 0,
    
       },
   
    },
 };

 return (
    
  <div className="chart-container">
        
      <Bar data={data} options={options} />
    </div>
 );
};

export default BarGraph;
