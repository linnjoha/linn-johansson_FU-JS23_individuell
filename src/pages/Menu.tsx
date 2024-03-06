import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./menu.scss";
import Dots from "../assets/dots.svg";
import Add from "../assets/add.svg";
const itemContainer = (
  <section className="item-container-wrapper">
    <div className="add">
      <img src={`${Add}`} alt="" />
    </div>
    <section className="item-info-wrapper">
      <h2>
        Kaffe
        <img src={`${Dots}`} alt="" />
      </h2>
      <h2>50 kr</h2>
      <p className="item-info">Bryggkaffe</p>
    </section>
  </section>
);

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <Header />
      <article className="menu">
        <h1>Meny</h1>
        {itemContainer}
      </article>
      <Footer />
    </div>
  );
};

export default Menu;
