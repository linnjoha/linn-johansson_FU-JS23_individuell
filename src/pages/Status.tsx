import "./status.scss";
import StatusDrone from "../assets/status-drone.png";
import { Link } from "react-router-dom";
import { useOrderState } from "../store/order";
const Status = () => {
  const { order, addOrder } = useOrderState();
  return (
    <article className=" status-wrapper">
      <p className="status-order">
        Ordernummer <span>#{order[0]?.orderNr}</span>
      </p>
      <img src={`${StatusDrone}`} alt="" />
      <section>
        <h1 className="status-heading">Din beställning är på väg!</h1>
        <p className="status-text">
          <span>{order[0]?.eta}</span> minuter
        </p>
      </section>
      <Link to="/">
        <button className="status-btn">Ok, cool!</button>
      </Link>
    </article>
  );
};

export default Status;
