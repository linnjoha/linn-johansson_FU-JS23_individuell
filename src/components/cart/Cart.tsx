import "./cart.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import CartIcon from "../../assets/cart.svg";
import TagUp from "../../assets/tag-up.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import { useCartStore } from "../../store/cart";
import { useOrderStore } from "../../store/order";
import { Beans } from "../../store/Beans";
import { useUserStore } from "../../store/user";
interface OrderResp {
  eta: number;
  orderNr: string;
}

const Cart = () => {
  const cartRef = useRef<HTMLDialogElement>(null);
  const {
    cart,
    add,
    remove,
    totalQnty,
    sumOfProducts,
    sumOfProduct,
    clearCart,
  } = useCartStore();
  // const [orderData, setOrderData] = useState<OrderResp>();
  const { order, addOrder } = useOrderStore();
  const { user } = useUserStore();

  const cartItem = (item: Beans) => (
    <section key={item.id} className="cartitem-container-wrapper">
      <section className="cartitem-info-wrapper">
        <h2>{item.title}</h2>
        <span className="dots"></span>
      </section>
      <div className="change-cart-qnty">
        <img onClick={() => add(item)} src={`${ArrowUp}`} alt="" />
        <p className="small-info-text qnty">{item.qnty}</p>
        <img onClick={() => remove(item)} src={`${ArrowDown}`} alt="" />
      </div>
      <p className="small-info-text __sum">{sumOfProduct(item)} kr</p>
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

  const sendOrder = async () => {
    try {
      const sendOrderList = cart
        .map((item) => {
          const objs = [];
          console.log(item.qnty);
          for (let i = 0; i < Number(item.qnty); i++) {
            const obj = {
              name: item.title,
              price: item.price,
            };
            objs.push(obj);
          }
          return objs;
        })
        .flat();
      console.log(sendOrderList);
      const header: any = {
        "Content-Type": "application/json",
      };
      if (user.token) {
        header.Authorization = `Bearer ${user.token}`;
      }
      const res = await fetch(
        `https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order`,
        {
          headers: header,

          method: "POST",
          body: JSON.stringify({
            details: {
              order: sendOrderList,
            },
          }),
        }
      );
      const json: OrderResp = await res.json();
      console.log(json);
      addOrder(json);
      console.log(order);
    } catch (err) {
      console.error(err);
    } finally {
      clearCart();
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
            <button onClick={() => sendOrder()} className="cart-btn">
              Take my money!
            </button>
          </Link>
        </article>
      </dialog>
    </div>
  );
};

export default Cart;
