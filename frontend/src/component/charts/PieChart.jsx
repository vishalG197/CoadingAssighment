// PieChart.js

import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Legend 1', value: 30 },
  { name: 'Legend 2', value: 40 },
  // Add more data as needed
];

const COLORS = ['#0088FE', '#00C49F']; // Add more colors based on the number of legends

const PieChart = ({ legendToggle }) => {
  const filteredData = data.filter((item, index) => legendToggle[`legend${index + 1}`]);

  return (
    <RechartsPieChart width={300} height={200}>
      <Pie dataKey="value" data={filteredData} cx="50%" cy="50%" outerRadius={60} fill="#8884d8">
        {filteredData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </RechartsPieChart>
  );
};

export default PieChart;
