import "./profile.scss";
import Header from "../components/header/Header";
import LogoIcon from "../assets/favicon-logo.png";
import ProfileImg from "../assets/order-profil.png";
import { useState, useRef, useEffect } from "react";
import { useUserStore } from "../store/user";
import { OrderHistory } from "../store/user";

const Profile = () => {
  //variabel för att stänga overlay
  const [open, setOpen] = useState(true);
  //globala variblerna som används för att spara inloggad/signad användare
  const { user, addOrderHistory, setUserDataToStorage, addTokentoStorage } =
    useUserStore();

  //referenser till inputs
  const registerName = useRef<HTMLInputElement>(null);
  const registerEmail = useRef<HTMLInputElement>(null);
  const registerPassword = useRef<HTMLInputElement>(null);
  const loginName = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

  // anropet som görs när vi trycker på logga in button
  const loginUser = async () => {
    try {
      const res = await fetch(
        `https://airbean-api-xjlcn.ondigitalocean.app/api/user/login`,
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            username: loginName.current?.value,
            password: loginPassword.current?.value,
          }),
        }
      );
      const json = await res.json();

      //sparar användarnamnet till blobal state och sessionstorage så vi kan rendera ut denna sedan
      if (loginName.current?.value) {
        setUserDataToStorage(loginName.current?.value, "");
      }

      if (json.success) {
        console.log(user);
        //sparar vår token till global state, samt sessionstorage
        addTokentoStorage(json.token);
        // stänger ner overlay//dialog
        setOpen(false);
      }
      //anropar metoden som hämtar vår orderhistorik
      getOrderHistory();
    } catch (err) {
      console.error(err);
    }
  };

  //metoden som körs när vi signar user
  const signUpUser = async () => {
    try {
      const res = await fetch(
        `https://airbean-api-xjlcn.ondigitalocean.app/api/user/signup`,
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            username: registerName.current?.value,
            password: registerPassword.current?.value,
          }),
        }
      );
      const json = await res.json();
      if (json.success) {
        if (registerName.current?.value && registerEmail.current?.value) {
          //sparar namn och email till globalstate samt session
          setUserDataToStorage(
            registerName.current.value,
            registerEmail.current.value
          );
          //när det sparats, nollställs input till default
          registerName.current.value = "";
          registerEmail.current.value = "";
        }
      }
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };
  const getOrderHistory = async () => {
    //hämtar user från sessionstorage för att använda token till anrop
    const userFromStorage: any = window.sessionStorage.getItem("user");
    const parsedStorage = JSON.parse(userFromStorage);
    try {
      const res = await fetch(
        `https://airbean-api-xjlcn.ondigitalocean.app/api/user/history`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedStorage.token}`,
          },
        }
      );
      const json = await res.json();
      const orderHistoryList = json.orderHistory;
      console.log("orderhistory", orderHistoryList);
      //sparar listan
      addOrderHistory(orderHistoryList);
      console.log(orderHistoryList);
    } catch (err) {
      console.error(err);
    }
  };
  // laddar in orderhistory direkt på sidan så att historiken uppdateras
  useEffect(() => {
    getOrderHistory();
  });
  const order = (order: OrderHistory) => (
    <div key={order?.orderNr} className="order-wrapper">
      <section className="order-container">
        <p className="order-number">#{order?.orderNr}</p>
        <p className=" order-date">{order?.orderDate}</p>
      </section>
      <section className="order-container sum">
        <p className="total-sum">total ordersumma</p>
        <p className="total-sum">{order?.total} kr</p>
      </section>
    </div>
  );
  const orders = user.orderHistory.map(order);
  useEffect(() => {
    if (user.token) {
      setOpen(false);
    }
  });
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
          <section className="input-container">
            <h1>Logga in</h1>
            <label>
              Namn
              <input
                required
                ref={loginName}
                type="text"
                placeholder="Sixten Kaffelövér"
              />
            </label>
            <label>
              Password
              <input
                required
                ref={loginPassword}
                type="password"
                placeholder="*************"
              />
            </label>

            <button onClick={() => loginUser()} className="profile-btn">
              Brew me a cup!
            </button>
            <h1>Ingen konto? Registrera dig nu!</h1>
            <label>
              Namn
              <input
                required
                ref={registerName}
                type="text"
                placeholder="Sixten Kaffelövér"
              />
            </label>
            <label>
              Epost
              <input
                required
                ref={registerEmail}
                type="email"
                placeholder="sixten.kaffelover@zocom.se"
              />
            </label>

            <label>
              Password
              <input
                required
                ref={registerPassword}
                type="password"
                placeholder="*************"
              />
            </label>
            <label className="gdpr-container">
              <button className="gdpr"></button>
              GDPR Ok!
            </label>
            <button onClick={() => signUpUser()} className="profile-btn">
              Sign me up!
            </button>
          </section>
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
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </article>
      <section className="order-section">
        <h2>Orderhistorik</h2>
        {orders}

        <section className="total-container">
          <p>Totalt spenderat</p>
          <p>{user.totalCost}kr</p>
        </section>
      </section>
    </article>
  );
};

export default Profile;
