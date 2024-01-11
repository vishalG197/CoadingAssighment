import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../../css/PieChart.css';
// import ChartJS from 'chart.js/auto';
import { ArcElement } from "chart.js";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from 'chart.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  )

ChartJS.register(ArcElement);

const PieChart = ({ data }) => {
  // Create a Map to store total emissions for each supplier
  const emissionsMap = new Map();

  // Calculate total emissions for each supplier
  data.forEach(item => {
    const supplier = item.Supplier;
    const emissions = item.Emissions;

    if (emissionsMap.has(supplier)) {
      emissionsMap.set(supplier, emissionsMap.get(supplier) + emissions);
    } else {
      emissionsMap.set(supplier, emissions);
    }
  });

  // Extract labels and total emissions from the Map
  const labels = Array.from(emissionsMap.keys());
  const emissionsData = Array.from(emissionsMap.values());

  const backgroundColors = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#4CAF50',
    '#FF5733',
    '#9B59B6',
    '#3498DB',
    '#E74C3C',
  ];
  
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: emissionsData,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  return (
    <div className="piechart">
     <div className="piechart-inner">
        <div />
      </div>
      <div className="frame-parent2">
        <div />
        <div />
      </div>
      <div className="frame-parent3">
        <div className="emission-by-supplier-parent">
          <div className="emission-by-supplier">Emission by Supplier</div>
          <div className="full-screen-parent">
            <div className="full-screen">
              <img className="vector-icon5" alt="" src="/vector.svg" />
            </div>
            <div className="more-horiz">
              <img className="vector-icon6" alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
        <Doughnut data={chartData} options={options} />
        
      </div>
    </div>
  );
};

export default PieChart;
