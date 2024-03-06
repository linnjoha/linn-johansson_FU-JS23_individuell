import "./cart.scss";
import CartIcon from "../../assets/cart.svg";
import TagUp from "../../assets/tag-up.svg";
import { useRef, useState } from "react";

const Cart = () => {
  const cartRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const toggleDialog = () => {
    if (cartRef.current && cartRef.current) {
      if (open) {
        setOpen(false);
      } else {
        setOpen(true);
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
      <dialog open={open} ref={cartRef} className="cart-dialog">
        <article className="cart-wrapper">
          <img className="tag-up" src={`${TagUp}`} alt="" />
          <h1 className="cart-heading">Din Beställning</h1>
          <section className="cart-total">
            <h2 className="cart-total-heading">Total</h2>
            <h2 className="cart-total-heading">summa kr</h2>
            <p>inkl moms + drönarleverans</p>
          </section>
          <button className="cart-btn">Take my money!</button>
        </article>
      </dialog>
    </div>
  );
};

export default Cart;
