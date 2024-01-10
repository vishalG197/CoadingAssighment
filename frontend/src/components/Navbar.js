import "./Navbar.css";
import group from "../images/group-625873.svg";
import fedropdown from "../images/fedropdown.svg";
import notification from "../images/notification.svg";
import ellipse from "../images/ellipse.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-child" />
      <div className="frame-parent">
        <div className="group-wrapper">
          <img className="frame-child" alt="" src={group} />
        </div>
        <div className="category-1">Category-1</div>
      </div>
      <div className="frame-group">
        <div className="ellipse-wrapper">
          <img className="frame-item" alt="" src={ellipse} />
        </div>
        <img className="fedrop-down-icon" alt="" src={fedropdown} />
        <div className="notification-1-wrapper">
          <div className="notification-1">
            <img className="vector-icon" alt="" src={notification} />
            <div className="wrapper">
              <div className="div">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
