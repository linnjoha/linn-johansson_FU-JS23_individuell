import "./landing.scss";
import Logo from "../assets/logo.svg";
import LeafL from "../assets/leafs-header.png";
import LeafR from "../assets/leafs-footer.png";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <img className="leaf-l" src={`${LeafL}`} alt="leafs" />
      <section className="logo-wrapper">
        <picture className="airbean-logo-wrapper">
          <img className="airbean-logo" src={`${Logo}`} alt="airbean-logo" />
        </picture>
        <h1>AIR BEAN</h1>
        <p>DRONEDELIVERED COFFEE</p>
      </section>
      <img className="leaf-r" src={`${LeafR}`} alt="leafs" />
    </div>
  );
};

export default Landing;
