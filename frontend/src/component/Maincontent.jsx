import Navbar from "./Navbar";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import LineAndBarChart from "./charts/LineAndBarChart";
import PieChart from "./charts/PieChart";
import DataTable from "./DataTable";
import SelectTag from "./SelectTag";
import "../css/MainContent.css";
import vector from "../images/Vector.svg";
import LegendsToggle from '../Redux/toggleReducer/action';
import EmissionBySupplierChart from "./charts/EmisionChart";
let data=[
  {
    "Date": "4/1/22",
    "Month": "Jan",
    "Year": 2022,
    "Supplier": "Reliance",
    "Emissions": 1698,
    "Revenue": 203456,
    "R/E": 120
  },
  {
    "Date": "3/1/23",
    "Month": "Jan",
    "Year": 2023,
    "Supplier": "Reliance",
    "Emissions": 1790,
    "Revenue": 245678,
    "R/E": 137
  },
  {
    "Date": "2/2/22",
    "Month": "Feb",
    "Year": 2022,
    "Supplier": "Reliance",
    "Emissions": 2108,
    "Revenue": 203456,
    "R/E": 96.5
  },
  {
    "Date": "5/2/23",
    "Month": "Feb",
    "Year": 2023,
    "Supplier": "Adani",
    "Emissions": 2205,
    "Revenue": 220000,
    "R/E": 99.8
  },
  {
    "Date": "6/3/22",
    "Month": "Mar",
    "Year": 2022,
    "Supplier": "Reliance",
    "Emissions": 2251,
    "Revenue": 245647,
    "R/E": 109.1
  },
  {
    "Date": "7/3/23",
    "Month": "Mar",
    "Year": 2023,
    "Supplier": "Adani",
    "Emissions": 2345,
    "Revenue": 287545,
    "R/E": 122.6
  },
  {
    "Date": "2/4/22",
    "Month": "Apr",
    "Year": 2022,
    "Supplier": "Shaurya Drugs",
    "Emissions": 1602,
    "Revenue": 179853,
    "R/E": 112.3
  },
  {
    "Date": "2/4/23",
    "Month": "Apr",
    "Year": 2023,
    "Supplier": "Adani",
    "Emissions": 1503,
    "Revenue": 195395,
    "R/E": 130.0
  },
  {
    "Date": "3/5/22",
    "Month": "May",
    "Year": 2022,
    "Supplier": "Orlife Healthcare",
    "Emissions": 3456,
    "Revenue": 464464,
    "R/E": 134.4
  },
  {
    "Date": "4/5/23",
    "Month": "May",
    "Year": 2023,
    "Supplier": "Adani",
    "Emissions": 4634,
    "Revenue": 575747,
    "R/E": 124.2
  },
  {
    "Date": "3/6/22",
    "Month": "June",
    "Year": 2022,
    "Supplier": "Orlife Healthcare",
    "Emissions": 3245,
    "Revenue": 464464,
    "R/E": 143.1
  },
  {
    "Date": "4/6/23",
    "Month": "June",
    "Year": 2023,
    "Supplier": "Adani",
    "Emissions": 4634,
    "Revenue": 575747,
    "R/E": 124.2
  },
  {
    "Date": "3/7/22",
    "Month": "July",
    "Year": 2022,
    "Supplier": "Rezicure Pharmaceuticals",
    "Emissions": 3543,
    "Revenue": 464464,
    "R/E": 131.1
  },
  {
    "Date": "5/7/23",
    "Month": "July",
    "Year": 2023,
    "Supplier": "Reliance",
    "Emissions": 3487,
    "Revenue": 575747,
    "R/E": 165.1
  },
  {
    "Date": "3/8/22",
    "Month": "Aug",
    "Year": 2022,
    "Supplier": "Rezicure Pharmaceuticals",
    "Emissions": 5445,
    "Revenue": 643864,
    "R/E": 118.2
  },
  {
    "Date": "5/8/23",
    "Month": "Aug",
    "Year": 2023,
    "Supplier": "Merion Care",
    "Emissions": 5258,
    "Revenue": 689747,
    "R/E": 131.2
  },
  {
    "Date": "2/9/22",
    "Month": "Sep",
    "Year": 2022,
    "Supplier": "Ruzette Organics",
    "Emissions": 4343,
    "Revenue": 564651,
    "R/E": 130.0
  },
  {
    "Date": "3/9/23",
    "Month": "Sep",
    "Year": 2023,
    "Supplier": "Ruzette Organics",
    "Emissions": 4524,
    "Revenue": 578965,
    "R/E": 128.0
  },
  {
    "Date": "6/10/22",
    "Month": "Oct",
    "Year": 2022,
    "Supplier": "Steller Bio Labs",
    "Emissions": 3434,
    "Revenue": 516513,
    "R/E": 150.4
  },
  {
    "Date": "6/10/23",
    "Month": "Oct",
    "Year": 2023,
    "Supplier": "Steller Bio Labs",
    "Emissions": 3332,
    "Revenue": 524535,
    "R/E": 157.4
  },
  {
    "Date": "10/11/22",
    "Month": "Nov",
    "Year": 2022,
    "Supplier": "Eskos Pharma",
    "Emissions": 3464,
    "Revenue": 546561,
    "R/E": 157.8
  },
  {
    "Date": "10/11/23",
    "Month": "Nov",
    "Year": 2023,
    "Supplier": "Eskos Pharma",
    "Emissions": 3535,
    "Revenue": 576855,
    "R/E": 163.2
  },
  {
    "Date": "1/12/22",
    "Month": "Dec",
    "Year": 2022,
    "Supplier": "Adani",
    "Emissions": 2324,
    "Revenue": 343535,
    "R/E": 147.8
  },
  {
    "Date": "2/12/23",
    "Month": "Dec",
    "Year": 2023,
    "Supplier": "Reliance",
    "Emissions": 2452,
    "Revenue": 354646,
    "R/E": 144.6
  }
]

const Main = () => {
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
    <div className="main">
      <div className="analyzes3-c1">
        <div className="data-in1">
          <div className="data-in-inner">
            <div className="rectangle-parent2">
              <div className="group-child5" />
              <Navbar />
              <Sidebar />
              <Footer />
              <div className="group-frame">
                <div className="frame-wrapper1">
                  <div className="frame-parent5">
                    <div className="purchased-goods-and-services-parent">
                      <div className="purchased-goods-and">
                        Purchased goods and Services
                      </div>
                      <img
                        className="mingcuteinformation-line-icon"
                        alt=""
                        src="/mingcuteinformationline.svg"
                      />
                      <i className="contribution-to-scope3">
                        contribution to Scope3
                      </i>
                    </div>
                    <div className="frame-child52" />
                    <div className="frame-wrapper2">
                      <div className="frame-wrapper3">
                        <div className="co2e-parent">
                          <div className="co2e">441510.9 CO2e</div>
                          <div className="yoy-wrapper">
                            <div className="yoy">25%YOY↑</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="purchased-goods-and-services-parent">
                  <div className="purchased-goods-and">
                    <p className="purchased-good-and">
                      Purchased good and services
                    </p>
                    <p className="purchased-good-and">to revenue ratio</p>
                  </div>
                  <img
                    className="mingcuteinformation-line-icon"
                    alt=""
                    src="/mingcuteinformationline.svg"
                  />
                  <img className="vector-icon8" alt="" src="/vector.svg" />
                </div>
                <div className="frame-child52" />
                <div className="frame-wrapper4">
                  <div className="frame-wrapper5">
                    <div className="co2e-group">
                      <div className="co2e">323586.2 CO2e</div>
                      <div className="yoy-wrapper">
                        <div className="yoy1">24%YOY↓</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LineAndBarChart legendToggle={legendToggle} data ={data}/>
          <PieChart legendToggle={legendToggle} data ={data} />
         {/* <EmissionBySupplierChart data={data} /> */}
          <div  className="frame-parent7">
            <div className="total-number-of-reached-suppli-wrapper">
              <div className="total-number-of-container">
                <p className="purchased-good-and">Total number of reached suppliers</p>
              </div>
            </div>
            <div className="wrapper20">
              <div className="div25">143</div>
            </div>
          </div>
          <div className="frame-parent8">
            <div className="purchased-goods-and-services-parent">
              <div className="purchased-goods-and">
                Purchased goods and Services
              </div>
              <img
                className="mingcuteinformation-line-icon"
                alt=""
                src="/mingcuteinformationline.svg"
              />
              <i className="contribution-to-scope3">contribution to Scope3</i>
            </div>
            <div className="frame-child52" />
            <div className="frame-wrapper2">
              <div className="frame-wrapper3">
                <div className="co2e-parent">
                  <div className="co2e">441510.9 CO2e</div>
                  <div className="yoy-wrapper">
                    <div className="yoy">25%YOY↑</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent8">
            <div className="purchased-goods-and-services-parent">
              <div className="purchased-goods-and">Category-1</div>
              <img
                className="mingcuteinformation-line-icon"
                alt=""
                src="/mingcuteinformationline.svg"
              />
              <img className="vector-icon9" alt="" src={vector} />
              <i className="contribution-to-scope3">contribution to Scope3</i>
            </div>
            <div className="frame-child52" />
            <div className="frame-wrapper2">
              <div className="frame-wrapper9">
                <div className="of-scope3-parent">
                  <div className="of-scope3">32% of Scope3</div>
                  <div className="yoy-wrapper">
                    <div className="yoy">25%YOY↑</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent15">
            <div className="group-parent1">
              <div className="frame-wrapper15">
                <div className="top-3-suppliers-contributing-t-group">
                  <div className="top-3-suppliers1">
                    Top 3 Suppliers contributing to Category-1
                  </div>
                  <div className="frame-wrapper16">
                    <div />
                  </div>
                  <div className="frame-parent16">
                    <div className="rectangle-parent5">
                      <div className="frame-child66" />
                      <div className="energy3">Supplier-1</div>
                      <div className="div27">64%</div>
                    </div>
                    <div className="rectangle-parent5">
                      <div className="frame-child67" />
                      <div className="energy3">Supplier-2</div>
                      <div className="div27">32%</div>
                    </div>
                    <div className="rectangle-parent5">
                      <div className="frame-child68" />
                      <div className="energy3">Supplier-3</div>
                      <div className="div29">
                        <span>15</span>
                        <span className="span9">{` `}</span>
                        <span className="span10">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-child69" />
            </div>
            <div className="frame-child70" />
           
            <div className="group-parent2">
              <div className="frame-parent18">
                <div className="line-frame">
                  <div className="frame-child73" />
                </div>
                <div className="material-symbolsarrow-drop-do-container">
                  <div className="material-symbolsarrow-drop-do3">
                    <img className="vector-icon13" alt="" src="/vector.svg" />
                  </div>
                  <div className="frame-child74" />
                  <div className="download-frame">
                    <div className="category-12">Download</div>
                  </div>
                </div>
                <div className="solardocument-bold-frame">
                  <div className="solardocument-bold2" />
                </div>
                <img className="vector-icon14" alt="" src="/vector.svg" />
              </div>
              <div className="supplier-wise1">Supplier-wise</div>
              <div className="material-symbolsarrow-drop-do-parent1">
                <div className="material-symbolsarrow-drop-do3">
                  <img className="vector-icon15" alt="" src="/vector.svg" />
                </div>
                <div className="frame-child74" />
                <div className="download-wrapper1">
                  <div className="category-12">Download</div>
                </div>
              </div>
            </div>
          </div>
          <DataTable data={data}/>
          <div className="line-parent5">
            <div className="frame-child56" />
            <div className="frame-child57" />
            <div className="frame-child58" />
            <div className="supplier-wrapper">
              <div className="supplier">Supplier</div>
            </div>
              <div className="supplier-wrapper">
              <div className="supplier">Supplier</div>
            </div>
            <div className="year-wrapper">
              <div className="supplier">YEAR</div>
            </div>
            <div className="emissionrevenue-ratio-wrapper">
              <div className="supplier">EMISSION/REVENUE RATIO</div>
            </div>
            <div className="mom-wrapper">
              <div className="supplier">MOM</div>
            </div>
            <div className="momyear-wise">MOM(YEAR WISE)</div>
            <div className="frame-child59" />
          </div>
        </div>
      </div>
      <SelectTag />
    </div>
  );
};

export default Main;
