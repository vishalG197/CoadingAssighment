import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import LineAndBarChart from "./LineAndBarChart";
import PieChart from "./PieChart";
import DataTable from "./DataTable";
import SelectTag from "./SelectTag";
import "./Main.css";
import LegendsToggle from './LegendsToggle/LegendsToggle';
import { useState } from "react";
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
          <LineAndBarChart legendToggle={legendToggle}/>
          <PieChart legendToggle={legendToggle} />
          <div className="frame-parent7">
            <div className="total-number-of-reached-suppli-wrapper">
              <div className="total-number-of-container">
                <p className="purchased-good-and">Total number of</p>
                <p className="purchased-good-and">reached suppliers</p>
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
              <img className="vector-icon9" alt="" src="/vector.svg" />
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
          <DataTable />
          <div className="line-parent5">
            <div className="frame-child56" />
            <div className="frame-child57" />
            <div className="frame-child58" />
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
