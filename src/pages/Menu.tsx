import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./menu.scss";
import Dots from "../assets/dots.svg";
import Add from "../assets/add.svg";
import { useEffect, useState } from "react";
import { Beans } from "../store/Beans";
import { useCartStore } from "../store/cart";

const Menu = () => {
  const { add } = useCartStore();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const res = await fetch(
          `https://airbean-api-xjlcn.ondigitalocean.app/api/beans`
        );
        const json = await res.json();
        setData(json.menu);
        console.log(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMenuData();
  }, []);
  console.log(data);

  const itemContainer = (item: Beans) => (
    <section className="item-container-wrapper">
      <div onClick={() => add(item)} className="add">
        <img src={`${Add}`} alt="" />
      </div>
      <section className="item-info-wrapper">
        <h2>
          {item.title}
          <img className="dots" src={`${Dots}`} alt="" />
        </h2>
        <h2>{item.price} kr</h2>
      </section>
      <p className="item-info">{item.desc}</p>
    </section>
  );
  const menuList = data.map(itemContainer);
  return (
    <div className="menu-wrapper">
      <Header />
      <article className="menu">
        <h1>Meny</h1>
        {menuList}
      </article>
      <Footer />
    </div>
  );
};

export default Menu;
