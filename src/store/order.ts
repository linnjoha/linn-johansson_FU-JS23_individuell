import { create } from "zustand";
// import { Beans } from "./Beans";
// import { useCartStore } from "./cart";

// const { cart } = useCartStore();
export interface OrderResp {
  eta: number;
  orderNr: string;
}
interface OrderState {
  order: OrderResp[];
  addOrder: (obj: OrderResp) => void;
}

export const useOrderStore = create<OrderState>()((set, get) => ({
  order: [],
  addOrder: (obj: OrderResp) => {
    const { order } = get();
    order.push(obj);
    set({ order });
  },
}));
