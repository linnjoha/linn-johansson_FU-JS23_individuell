import "./status.scss";
import StatusDrone from "../assets/status-drone.png";
import { Link } from "react-router-dom";
import { useOrderStore } from "../store/order";
import { useEffect, useState } from "react";

const Status = () => {
  const { order, addOrder } = useOrderStore();
  const [orderNr, setOrderNr] = useState<string>();
  // useEffect(() => {
  //   if (order[0]?.orderNr) {
  //     const orderData = async () => {
  //       console.log(
  //         `https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/${order[0].orderNr}`
  //       );
  //       try {
  //         const res = await fetch(
  //           `https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/${order[0].orderNr}`,
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         const json = await res.json();

  //         console.log(json);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     };
  //     orderData();
  //   }
  // });
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
  else
    return (
      <article className=" status-wrapper">
        <p className="status-order">Ingen order aktiv</p>
        <img src={`${StatusDrone}`} alt="" />

        <Link to="/">
          <button className="status-btn">Ok, cool!</button>
        </Link>
      </article>
    );
};

export default Status;
