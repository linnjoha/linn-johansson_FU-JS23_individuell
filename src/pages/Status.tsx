import "./status.scss";
import StatusDrone from "../assets/status-drone.png";
const Status = () => {
  return (
    <article className=" status-wrapper">
      <p className="status-order">
        Ordernummer <span>#12DV23F</span>
      </p>
      <img src={`${StatusDrone}`} alt="" />
      <section>
        <h1 className="status-heading">Din beställning är på väg!</h1>
        <p className="status-text">
          <span>13</span> minuter
        </p>
      </section>
      <button className="status-btn">Ok, cool!</button>
    </article>
  );
};

export default Status;
