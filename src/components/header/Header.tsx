// import Nav from "../nav/Nav";
import "./header.scss";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/cart.svg";
import NavBar from "../../assets/bar.svg";
import Cart from "../cart/Cart";
const Header = () => {
  return (
    <>
      <nav className="navigator">
        <picture className="nav-img-wrapper">
          <img src={`${NavBar}`} alt="navicon" />
        </picture>

        <Cart />
      </nav>
    </>
  );
};

export default Header;
