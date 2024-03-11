import "./profile.scss";
import Header from "../components/header/Header";
import LogoIcon from "../assets/favicon-logo.png";
import ProfileImg from "../assets/order-profil.png";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [open, setOpen] = useState(true);
  const inputUser = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const order = (
    <div className="order-wrapper">
      <section className="order-container">
        <p className="order-number">#</p>
        <p className=" order-date"></p>
      </section>
      <section className="order-container sum">
        <p className="total-sum">total ordersumma</p>
        <p className="total-sum"> kr</p>
      </section>
    </div>
  );
  const loginUser = async () => {
    try {
      const res = await fetch(
        `https://airbean-api-xjlcn.ondigitalocean.app/api/user/login`,
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            username: inputUser.current?.value,
            password: inputPassword.current?.value,
          }),
        }
      );
      const json = await res.json();
      if (json.success) {
        window.sessionStorage.setItem("token", json.token);
        setOpen(false);
        getOrderHistory();
      } else {
        signUpUser();
      }
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };
  const signUpUser = async () => {
    try {
      const res = await fetch(
        `https://airbean-api-xjlcn.ondigitalocean.app/api/user/signup`,
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            username: inputUser.current?.value,
            password: inputPassword.current?.value,
          }),
        }
      );
      const json = await res.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };
  const getOrderHistory = async () => {
    try {
      const token = window.sessionStorage.getItem("token");
      console.log(token);
      const res = await fetch(
        `https://airbean-api-xjlcn.ondigitalocean.app/api/user/history`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
          },
        }
      );
      const json = await res.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <article className="profile-wrapper">
      <Header />

      <dialog className="profile-overlay" open={open}>
        <article className="create-profile-wrapper">
          <picture>
            <img src={`${LogoIcon}`} alt="" />
          </picture>
          <h1>Välkommen till AirBean-familjen!</h1>
          <p>
            Genom att skapa ett konto nedan kan du spara och se din
            orderhistorik.
          </p>

          <label>
            Namn
            <input
              required
              ref={inputUser}
              type="text"
              placeholder="Sixten Kaffelövér"
            />
          </label>
          <label>
            Epost
            <input
              ref={inputEmail}
              type="email"
              placeholder="sixten.kaffelover@zocom.se"
            />
          </label>
          <label>
            Password
            <input
              required
              ref={inputPassword}
              type="password"
              placeholder="*************"
            />
          </label>
          <label>
            <input type="checkbox" />
            GDPR ok!
          </label>
          {/* <Link to="/profile"> */}
          <button
            // type="submit"
            onClick={() => loginUser()}
            className="profile-btn"
          >
            Brew me a cup!
          </button>
          {/* </Link> */}
        </article>
      </dialog>
      <article className="profile-status-wrapper">
        <div className="profileimg-container">
          <img
            className="profile-img"
            src={`${ProfileImg}`}
            alt="profile-img"
          />
        </div>
        <h1>Sixten Kaffelövér</h1>
        <p>sixten.kaffelover@zocom.se</p>
      </article>
      <section className="order-section">
        <h2>Orderhistorik</h2>
        {order}
        {order}
        {order}
        <section className="total-container">
          <p>Totalt spenderat</p>
          <p>1000 kr</p>
        </section>
      </section>
    </article>
  );
};

export default Profile;
