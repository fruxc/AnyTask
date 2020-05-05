import { createStore } from "redux";
import { User } from "./User";
export const ConfigureStore = () => {
  const store = createStore(User);
  return store;
};
