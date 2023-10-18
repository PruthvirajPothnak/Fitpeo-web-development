import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

function Charts() {
  // Register the required scales
  Bar.register({ category: 'x' });
  Pie.register({ category: 'y' });

  // Bar Chart Data and Options
  const barChartData = { /* ... */ };
  const barChartOptions = { /* ... */ };

  // Pie Chart Data and Options
  const pieChartData = { /* ... */ };

  return (
    <div className="charts-container">
      <div className="bar-chart">
        <h2>Overview</h2>
        <h3>Monthly Earning</h3>
        <select>
          <option value="earnings">Earnings</option>
          <option value="expenses">Expenses</option>
        </select>
        <Bar data={barChartData} options={barChartOptions} />
      </div>
      <div className="pie-chart">
        <h2>Customers</h2>
        <h3>Customers that buy products</h3>
        <p>65% Total New Customers</p>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
}

export default Charts;
