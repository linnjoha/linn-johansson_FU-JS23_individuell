import "./profile.scss";
import Header from "../components/header/Header";
import LogoIcon from "../assets/favicon-logo.png";
import ProfileImg from "../assets/order-profil.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [open, setOpen] = useState(true);

  const order = (
    <div className="order-wrapper">
      <section className="order-container">
        <p className="order-number">#AB1123282323Z</p>
        <p className=" order-date">20/03/06</p>
      </section>
      <section className="order-container sum">
        <p className="total-sum">total ordersumma</p>
        <p className="total-sum">400 kr</p>
      </section>
    </div>
  );
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
          <form action="submit">
            <label>
              Namn
              <input type="text" placeholder="Sixten Kaffelövér" />
            </label>
            <label>
              Epost
              <input type="email" placeholder="sixten.kaffelover@zocom.se" />
            </label>
            <label>
              <input type="checkbox" />
              GDPR ok!
            </label>
            <Link to="/profile">
              <button onClick={() => setOpen(false)} className="profile-btn">
                Brew me a cup!
              </button>
            </Link>
          </form>
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
