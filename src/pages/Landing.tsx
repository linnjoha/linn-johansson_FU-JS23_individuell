import "./landing.scss";
import Logo from "../assets/logo.svg";
import LeafL from "../assets/leafs-left.png";
import LeafR from "../assets/leafs-right.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Link to="/menu">
      <div className="landing-wrapper">
        <img className="leaf-l" src={`${LeafL}`} alt="leafs" />
        <section className="logo-wrapper">
          <picture className="airbean-logo-wrapper">
            <img className="airbean-logo" src={`${Logo}`} alt="airbean-logo" />
          </picture>
          <h1 className="landing-heading">AIR BEAN</h1>
          <p className="landing-text">DRONEDELIVERED COFFEE</p>
        </section>
        <img className="leaf-r" src={`${LeafR}`} alt="leafs" />
      </div>
    </Link>
  );
};

export default Landing;
