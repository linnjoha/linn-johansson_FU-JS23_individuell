import { create } from "zustand";
import { Beans } from "./Beans";

interface CartState {
  cart: Beans[];
  add: (obj: Beans) => void;
  remove: (obj: Beans) => void;
  totalQnty: () => number;
  sumOfProduct: (obj: Beans) => number;
  sumOfProducts: () => number;
}
const addToCart = (cart: Beans[], obj?: Beans) => {
  console.log(cart);
  if (obj && cart) {
    const exists = cart.find((p) => p.id === obj.id);
    if (exists) {
      exists.qnty = Number(exists.qnty) + 1;
    } else {
      obj.qnty = 1;
      cart.push(obj);
    }
  }
};

const getValueFromStoredSession = () => {
  const storedData = window.sessionStorage.getItem("key");
  if (!storedData) return [];
  console.log(storedData);
  const parsedData = JSON.parse(storedData as any);
  console.log(JSON.parse(storedData as any));
  return parsedData;
};

export const useCartStore = create<CartState>()((set, get) => ({
  cart: getValueFromStoredSession(),
  add: (obj?: Beans) => {
    const { cart } = get();
    addToCart(cart, obj);
    set({ cart });
    console.log(cart);
    if (cart.length) {
      window.sessionStorage.setItem("key", JSON.stringify(cart));
    }
  },
  remove: (obj?: Beans) => {
    const { cart } = get();
    if (obj && cart) {
      const exists = cart.find((p) => p.id === obj.id);
      if (exists && exists.qnty != 0) {
        exists.qnty = Number(exists.qnty) - 1;
      } else {
        set({ cart: cart.filter((item) => item !== exists) });
      }
    }
  },
  totalQnty: () => {
    const { cart } = get();
    return cart.reduce((acc, cur) => (acc += Number(cur.qnty)), 0);
  },
  sumOfProduct: (obj: Beans) => {
    const { cart } = get();
    const item = cart.find((cartItem) => cartItem.id === obj.id);
    const sumOfproduct = item ? Number(item.qnty) * item.price : 0;
    return sumOfproduct;
  },
  sumOfProducts: () => {
    const { cart } = get();
    return cart.reduce((acc, cur) => (acc += cur.price * Number(cur.qnty)), 0);
  },
}));
