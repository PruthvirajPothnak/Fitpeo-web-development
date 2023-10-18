import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DoughnutChart = () => {
  // Define data for the doughnut chart
  const data = {
    datasets: [
      {
        data: [35,65],
        backgroundColor: ['purple', 'pink'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Doughnut
        data={data}
        options={{
          
          layout: {
            padding: {
              borderRadius: 2,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
