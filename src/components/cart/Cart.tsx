import "./cart.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import CartIcon from "../../assets/cart.svg";
import TagUp from "../../assets/tag-up.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import { useCartStore } from "../../store/cart";
import { Beans } from "../../store/Beans";
const Cart = () => {
  const cartRef = useRef<HTMLDialogElement>(null);
  const {
    cart,
    add,
    remove,
    totalQnty,
    sumOfProducts,
    sumOfProduct: sumOfproduct,
  } = useCartStore();
  const cartItem = (item: Beans) => (
    <section className="cartitem-container-wrapper">
      <section className="cartitem-info-wrapper">
        <h2>{item.title}</h2>
        <span className="dots"></span>
      </section>
      <div className="change-cart-qnty">
        <img onClick={() => add(item)} src={`${ArrowUp}`} alt="" />
        <p className="small-info-text qnty">{item.qnty}</p>
        <img onClick={() => remove(item)} src={`${ArrowDown}`} alt="" />
      </div>
      <p className="small-info-text __sum">{sumOfproduct(item)} kr</p>
    </section>
  );
  const cartItems = cart.map(cartItem);
  const toggleDialog = () => {
    if (cartRef.current) {
      if (cartRef.current.open) {
        cartRef.current.close();
      } else {
        cartRef.current.showModal();
      }
    }
  };

  return (
    <div>
      <picture
        onClick={(e) => toggleDialog()}
        className="nav-img-wrapper __cart"
      >
        <div className="cart-sum __absolute">{totalQnty()}</div>
        <img src={`${CartIcon}`} alt="navicon" />
      </picture>
      <dialog ref={cartRef} className="cart-dialog">
        <picture
          onClick={(e) => toggleDialog()}
          className="nav-img-wrapper __cart"
        >
          {" "}
          <div className="cart-sum">{totalQnty()}</div>
          <img src={`${CartIcon}`} alt="navicon" />
        </picture>
        <img className="tag-up" src={`${TagUp}`} alt="" />
        <article className="cart-wrapper">
          <h1 className="cart-heading">Din Beställning</h1>
          {cartItems}
          <section className="cartitem-container-wrapper">
            <section className="cartitem-info-wrapper __total">
              <h2 className="cart-total-heading">Total</h2>
              <span className="dots"></span>
              <h2 className="cart-total-heading">{sumOfProducts()} kr</h2>
            </section>
            <p className="small-info-text __sum">inkl moms + drönarleverans</p>
          </section>
          <Link to="/status">
            <button className="cart-btn">Take my money!</button>
          </Link>
        </article>
      </dialog>
    </div>
  );
};

export default Cart;
