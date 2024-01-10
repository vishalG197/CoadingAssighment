import "./PieChart.css";
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
        <RechartsPieChart width={300} height={200}>
      <Pie dataKey="value" data={filteredData} cx="50%" cy="50%" outerRadius={60} fill="#8884d8">
        {filteredData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </RechartsPieChart>
      </div>
    </div>
  );
};

export default PieChart;
