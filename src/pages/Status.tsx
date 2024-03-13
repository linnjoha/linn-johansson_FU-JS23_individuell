import "./status.scss";
import StatusDrone from "../assets/status-drone.png";
import { Link } from "react-router-dom";
import { useOrderStore } from "../store/order";

const Status = () => {
  const { order, addOrder } = useOrderStore();

  if (order[0]?.orderNr)
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
  // vad som visas när ingen order finns
  else
    return (
      <article className=" status-wrapper __no-order">
        <p className="status-order">Ingen order aktiv</p>
        <img src={`${StatusDrone}`} alt="" />

        <Link to="/menu">
          <button className="status-btn">Not cool!</button>
        </Link>
      </article>
    );
};

export default Status;
