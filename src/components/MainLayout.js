import React from 'react';
import CustomCard from './CustomCard';
import Header from './Header';
import Table from './Table';
import Charts from './Charts';
import DoughnutChart from './DoughnutChart';
import BarGraph from './BarGraph';
import './MainLayout.css';

function MainLayout() {

  return (

    <div className="main-layout">
        <Header/>
    <div className="content">

      <div className="column">
          <CustomCard imagePath="../earnings.jpg" title="Earning" amount="$198k" increase="↑ 37.8%" extension="this month"/>
        </div>
        <div className="column">
          <CustomCard imagePath="../order.jpg" title="Orders" amount="$2.4k" increase="↓ 2%" extension="this month"/>
        </div>
        <div className="column">
        <CustomCard imagePath="../balance.jpg" title="Balance" amount="$2.4k" increase="↓ 2%" extension="this month"/>
        </div>
        <div className="column">
        <CustomCard imagePath='../sales.jpg' title="Total Sales" amount="$89k" increase="↑ 11%" extension="this week"/>
        </div>
      </div>
      <div className='charts'>

        <div style={{width:"820px", marginRight:"25px"}}>
          <BarGraph/>
        </div>

        <div>
          <DoughnutChart/></div>
        </div>
      {/* <Charts/> */}
      <Table/>
    </div>
  );
}
export default MainLayout;

MainLayout.js