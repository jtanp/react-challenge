import { createStore } from "redux";
import reducer from "./reducer";
import { Store } from "../types";

const getLocalStorage = () => {
  try {
    const state = localStorage.getItem("state");
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (error) {
    return undefined;
  }
};

const setLocalStorage = (forms: Store) => {
  try {
    const storedState = JSON.stringify(forms);
    localStorage.setItem("state", storedState);
  } catch (error) {
    console.log(error);
  }
};

const initialState = getLocalStorage();

const store = createStore(reducer, initialState);

store.subscribe(() => setLocalStorage(store.getState()));

export default store;
