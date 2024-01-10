import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import '../../css/LineAndBarChart.css';

const LineAndBarChart = ({ data }) => {
  const [chartType, setChartType] = useState('both');

  const getChartConfig = (chartType) => {
    const barData = data
      .filter((entry) => entry.Year === 2022)
      .map((entry) => entry.Emissions);

    const lineData = data
      .filter((entry) => entry.Year === 2023)
      .map((entry) => entry['R/E']);

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return {
      labels: labels,
      datasets: [
        {
          label: 'Emissions (2022)',
          data: barData,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          fill: false,
          yAxisID: 'y-axis-1',
        },
        {
          label: 'R/E (2023)',
          data: lineData,
          backgroundColor: 'rgba(255,99,132,1)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          fill: false,
          yAxisID: 'y-axis-2',
        },
      ],
    };
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  return (
    <div className="lineandbarchart">
      <div>
       
        {chartType === 'bar' && <Bar data={getChartConfig('bar')} />}
        {chartType === 'line' && <Line data={getChartConfig('line')} />}
        {chartType === 'both' && (
          <div>
            <Bar data={getChartConfig()}
          options={{ multiType: true }} />
          </div>
        )}
      </div>
      <div className="chart-toggle">
          <label>
            <input
              type="radio"
              value="bar"
              checked={chartType === 'bar'}
              onChange={() => handleChartTypeChange('bar')}
            />
            Bar Chart
          </label>
          <label>
            <input
              type="radio"
              value="line"
              checked={chartType === 'line'}
              onChange={() => handleChartTypeChange('line')}
            />
            Line Chart
          </label>
          <label>
            <input
              type="radio"
              value="both"
              checked={chartType === 'both'}
              onChange={() => handleChartTypeChange('both')}
            />
            Both Charts
          </label>
        </div>
    </div>
  );
};

export default LineAndBarChart;
