import "./Sidebar.css";
import peter from "../images/peter.png";
import fedropdown from "../images/fedropdown.svg";
import mdiwateroutline from "../images/mdiwateroutline.svg";
import rideletebin6line from "../images/rideletebin6line.svg";
import materialsymbolsenergyprogramsavingoutline from "../images/materialsymbolsenergyprogramsavingoutline.svg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="button-wrapper">
        <div className="button">
          <img
            className="cropped-peters-surgical-logo-c-icon"
            alt=""
          src={peter}
          />
        </div>
      </div>
      <div className="button-parent">
        <div className="button1">
          <div className="data-in-wrapper">
            <div className="data-in">Data-in</div>
          </div>
        </div>
        <div className="button2">
          <div className="energy">Energy</div>
          <img className="fedrop-down-icon1" alt="" src={fedropdown} />
          <img
            className="material-symbolsenergy-progra-icon"
            alt=""
            src={materialsymbolsenergyprogramsavingoutline}
          />
        </div>
        <div className="button3">
          <div className="mditruck-cargo-container" />
          <div className="water-and-effluents">Water and Effluents</div>
          <img className="fedrop-down-icon2" alt="" src={fedropdown} />
          <img
            className="mdiwater-outline-icon"
            alt=""
            src={mdiwateroutline}
          />
        </div>
      </div>
      <div className="button-group">
        <div className="button4">
          <div className="data-in-wrapper">
            <div className="data-in">Analyze</div>
            <div className="frame-inner" />
          </div>
        </div>
        <div className="button5">
          <img
            className="material-symbolsenergy-progra-icon1"
            alt=""
            src={materialsymbolsenergyprogramsavingoutline}
          />
          <div className="energy1">Energy</div>
        </div>
        <div className="button6">
          <img
            className="ridelete-bin-6-line-icon"
            alt=""
            src={rideletebin6line}
          />
          <div className="waste">Waste</div>
          <div className="eta">(βeta)</div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="rectangle-div" />
        <div className="open-help-centre">Open Help Centre</div>
      </div>
    </div>
  );
};

export default Sidebar;
