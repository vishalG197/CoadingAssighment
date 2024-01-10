import "./LineAndBarChart.css";
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
const LineAndBarChart = ({ legendToggle }) => {
  const filteredData = data.map((entry) => {
    return {
      ...entry,
      value: legendToggle[entry.name],
    };
  });
  return (
    <div className="lineandbarchart">
      <div className="group-parent">
        <div className="frame-wrapper">
          <div className="top-3-suppliers-contributing-t-parent">
            <div className="top-3-suppliers">
              Top 3 Suppliers contributing to Category-1
            </div>
            <div className="frame-container">
              <div />
            </div>
            <div className="frame-div">
              <div className="rectangle-group">
                <div className="frame-child1" />
                <div className="supplier-1">Supplier-1</div>
                <div className="div1">64%</div>
              </div>
              <div className="rectangle-group">
                <div className="frame-child2" />
                <div className="supplier-1">Supplier-2</div>
                <div className="div1">32%</div>
              </div>
              <div className="rectangle-group">
                <div className="frame-child3" />
                <div className="supplier-1">Supplier-3</div>
                <div className="div3">
                  <span>15</span>
                  <span className="span">{` `}</span>
                  <span className="span1">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-div" />
      </div>
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
   
    </div>
  );
};

export default LineAndBarChart;
