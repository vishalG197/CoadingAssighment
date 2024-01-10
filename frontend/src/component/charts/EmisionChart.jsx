import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import '../../css/PieChart.css';

const PieChart = ({ data, legendToggle }) => {
  // Extract labels, data, and backgroundColor from the provided data
  const labels = data.map(item => item.Supplier);
  const emissionsData = data.map(item => item.Emissions);
  const backgroundColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Add more colors if needed

  // Filter data based on legendToggle
  const filteredLabels = labels.filter((_, index) => legendToggle[`legend${index + 1}`]);
  const filteredData = emissionsData.filter((_, index) => legendToggle[`legend${index + 1}`]);
  const filteredColors = backgroundColors.slice(0, filteredLabels.length);

  const filteredChartData = {
    labels: filteredLabels,
    datasets: [
      {
        data: filteredData,
        backgroundColor: filteredColors,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right',
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
        {/* Use filteredChartData for the Doughnut chart */}
        <Doughnut data={filteredChartData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
