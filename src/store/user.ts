import { create } from "zustand";

export interface OrderHistory {
  total: number;
  orderNr: string;
  orderDate: string;
}
export interface User {
  name: string;
  email: string;
  orderHistory: OrderHistory[];
  totalCost: number;
}
interface UserState {
  user: User;
  addOrderHistory: (obj: OrderHistory) => void;
}

export const useUserStore = create<UserState>()((set, get) => ({
  user: {
    name: "",
    email: "",
    orderHistory: [
      // {
      //   total:,
      //   orderNr: "string",
      //   orderDate: "string",
      // },
    ],
    totalCost: 0,
  },
  addOrderHistory: (obj: OrderHistory) => {
    const { user } = get();
    user.orderHistory.push(obj);
    user.totalCost = user.totalCost + obj.total;
    set({ user });
  },
}));
