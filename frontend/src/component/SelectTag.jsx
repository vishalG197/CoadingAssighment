import React, { useState } from "react";
import "../css/SelectTag.css";

const SelectTag = ({ onDateFilterChange }) => {
  const [selectedDateRange, setSelectedDateRange] = useState("Mar’23 - Apr’23");

  const dateRanges = ["Jan’22 - Feb’22", "Mar’22 - Apr’22", "May’22 - Jun’22"];

  const handleDateRangeChange = (event) => {
    const selectedRange = event.target.value;
    setSelectedDateRange(selectedRange);
    // You can pass the selected date range to the parent component or handle filtering here
    onDateFilterChange(selectedRange);
  };

  return (
    <div className="selecttag">
      <div className="show-tline-mar23-apr23-parent">
        <div className="show-tline-mar23-container">
          <span>{`Show Tline: `}</span>
          <select className="date-range-select" value={selectedDateRange} onChange={handleDateRangeChange}>
            {dateRanges.map((range, index) => (
              <option key={index} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div className="frame-child51" />
        <img className="vector-icon7" alt="" src="/vector.svg" />
      </div>
      <div className="material-symbolsarrow-drop-do2" />
    </div>
  );
};

export default SelectTag;
