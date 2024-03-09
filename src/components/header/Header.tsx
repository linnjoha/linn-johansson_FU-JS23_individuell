import "./header.scss";

import Cart from "../cart/Cart";
import Nav from "../nav/Nav";
const Header = () => {
  return (
    <>
      <nav className="navigator">
        <Nav />
        <Cart />
      </nav>
    </>
  );
};

export default Header;
