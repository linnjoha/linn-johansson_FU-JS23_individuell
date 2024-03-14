import { create } from "zustand";

export interface OrderHistory {
  total: number;
  orderNr: string;
  orderDate: string;
}
export interface User {
  name: string;
  email: string;
  token: string;
  orderHistory: OrderHistory[];
  totalCost: number;
}
interface UserState {
  user: User;
  setUserDataToStorage: (name: string, email: string) => void;
  addTokentoStorage: (token: string) => void;
  addOrderHistory: (arr: OrderHistory[]) => void;
}

const getvalueFromStorage = () => {
  const storedUserData = window.sessionStorage.getItem("user");
  if (!storedUserData)
    return {
      name: "",
      email: "",
      token: "",
      orderHistory: [],
      totalCost: 0,
    };
  console.log(storedUserData);
  const parsedUserData = JSON.parse(storedUserData as any);

  return parsedUserData;
};

export const useUserStore = create<UserState>()((set) => ({
  user: getvalueFromStorage(),

  setUserDataToStorage: (name: string, email: string) => {
    const storedUserData = getvalueFromStorage();
    storedUserData.name = name;
    storedUserData.email = email;
    window.sessionStorage.setItem("user", JSON.stringify(storedUserData));
    set({ user: getvalueFromStorage() });
  },
  addTokentoStorage: (token: string) => {
    const storedUserData = getvalueFromStorage();
    storedUserData.token = token;
    window.sessionStorage.setItem("user", JSON.stringify(storedUserData));
    set({ user: getvalueFromStorage() });
  },
  addOrderHistory: (orderHistory: OrderHistory[]) => {
    const storedUserData = getvalueFromStorage();
    storedUserData.orderHistory = orderHistory;
    storedUserData.totalCost = orderHistory.reduce(
      (acc, curr) => (acc += curr.total),
      0
    );
    window.sessionStorage.setItem("user", JSON.stringify(storedUserData));
    set({ user: getvalueFromStorage() });
  },
}));
