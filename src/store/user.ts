import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
interface User {
  orderHistory: {
    total: number;
    orderNr: string;
    orderDate: string;
  };
}
