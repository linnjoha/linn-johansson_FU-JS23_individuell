import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface User {
  name: string;
  email: string;
  orderHistory: [];
}
// interface LoginState {
//   resp: LoginResp | null;
//   loginUser: () => void;
//   signUpUser: () => void;
//   getOrderHistory: () => any[];
// }

// export const useOrderState = create<LoginState>()((set, get) => ({
//   resp: null,
//   loginUser: () => {},
//   signUpUser: () => {},
//   getOrderHistory: () => {
//     return [];
//   },
// }));
