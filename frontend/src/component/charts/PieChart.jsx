import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../../css/PieChart.css';
import ChartJS from 'chart.js/auto';

// Extend Arc element
ChartJS.defaults.elements.arc = ChartJS.defaults.elements.line;

const PieChart = ({ data }) => {
  const labels = data.map(item => item.Supplier);
  const emissionsData = data.map(item => item.Emissions);
  const backgroundColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
    maintainAspectRatio: false,
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
        {/* Additional styling elements if needed */}
        <div />
      </div>
      <div className="frame-parent2">
        {/* Additional styling elements if needed */}
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
