// MainComponent.js

import React, { useState } from 'react';
import DateFilters from './DateFilters/DateFilters';
import LegendsToggle from './LegendsToggle/LegendsToggle';
import BarAndLineChart from './Charts/BarAndLineChart';

const MainComponent = () => {
  const [legendToggle, setLegendToggle] = useState({
    legend1: true,
    legend2: true,
    // Add more legends as needed
  });

  const handleLegendToggle = (legendName) => {
    setLegendToggle((prevToggle) => ({
      ...prevToggle,
      [legendName]: !prevToggle[legendName],
    }));
  };

  return (
    <div>
      {/* Date Filters */}
      <DateFilters />

      {/* Legends Toggle */}
      <LegendsToggle legendToggle={legendToggle} onLegendToggle={handleLegendToggle} />

      {/* Combined Bar and Line Chart */}
      <BarAndLineChart legendToggle={legendToggle} />
    </div>
  );
};

export default MainComponent;
