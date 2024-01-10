import "./Footer.css";
import longsite from "../images/Longsight.svg"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-child" />
      <div className="powered-by-parent">
        <div className="powered-by">Powered by</div>
        <img className="longsight-1-icon" alt="" src={longsite} />
      </div>
    </div>
  );
};

export default Footer;
