// BarAndLineChart.js

import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  // Sample data for Bar and Line Chart
];

const BarAndLineChart = ({ legendToggle }) => {
  const filteredData = data.map((entry) => {
    return {
      ...entry,
      value: legendToggle[entry.name],
    };
  });

  return (
    <div>
       <RechartsBarChart width={400} height={200} data={filteredData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {filteredData.map((entry, index) => (
          <Bar key={`bar-${index}`} dataKey={`value`} fill="#8884d8" />
        ))}
      </RechartsBarChart>
      <RechartsLineChart width={400} height={200} data={filteredData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {filteredData.map((entry, index) => (
          <Line key={`line-${index}`} type="monotone" dataKey={`value`} stroke="#82ca9d" />
        ))}
      </RechartsLineChart>
    </div>
  );
};

export default BarAndLineChart;
