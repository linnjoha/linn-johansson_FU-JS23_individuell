// import Nav from "../nav/Nav";
import "./header.scss";
import Cart from "../../assets/cart.svg";
import NavBar from "../../assets/bar.svg";
const Header = () => {
  return (
    <>
      <nav className="navigator">
        <picture className="nav-img-wrapper">
          <img src={`${NavBar}`} alt="carticon" />
        </picture>
        <picture className="nav-img-wrapper __cart">
          <img src={`${Cart}`} alt="navicon" />
        </picture>
      </nav>
    </>
  );
};

export default Header;
