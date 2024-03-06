import "./cart.scss";
import CartIcon from "../../assets/cart.svg";
import TagUp from "../../assets/tag-up.svg";
import { useRef } from "react";
import Dots from "../../assets/dots.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";
const Cart = () => {
  const cartRef = useRef<HTMLDialogElement>(null);
  const cartItem = (
    <section className="cartitem-container-wrapper">
      <section className="cartitem-info-wrapper">
        <h2>
          Bryggkaffe
          <img src={`${Dots}`} alt="" />
        </h2>
        <p className="small-info-text __sum">50kr</p>
      </section>
      <div className="change-cart-qnty">
        <img src={`${ArrowUp}`} alt="" />
        <p className="small-info-text qnty">1</p>
        <img src={`${ArrowDown}`} alt="" />
      </div>
    </section>
  );

  const toggleDialog = () => {
    if (cartRef.current && cartRef.current) {
      if (cartRef.current.open) {
        cartRef.current.close();
      } else {
        cartRef.current && cartRef.current.showModal();
      }
    } else console.log("hello");
  };

  return (
    <div>
      <picture
        onClick={(e) => toggleDialog()}
        className="nav-img-wrapper __cart"
      >
        <img src={`${CartIcon}`} alt="navicon" />
      </picture>
      <dialog ref={cartRef} className="cart-dialog">
        <picture
          onClick={(e) => toggleDialog()}
          className="nav-img-wrapper __cart"
        >
          <img src={`${CartIcon}`} alt="navicon" />
        </picture>
        <img className="tag-up" src={`${TagUp}`} alt="" />
        <article className="cart-wrapper">
          <h1 className="cart-heading">Din Beställning</h1>
          {cartItem}
          {cartItem}
          {cartItem}
          {cartItem}
          <section className="cart-total">
            <h2 className="cart-total-heading">
              Total <img src={`${Dots}`} alt="" />
            </h2>
            <h2 className="cart-total-heading">300 kr</h2>
            <p className="small-info-text">inkl moms + drönarleverans</p>
          </section>
          <button className="cart-btn">Take my money!</button>
        </article>
      </dialog>
    </div>
  );
};

export default Cart;
