import { createStore } from "redux";
import rootReducer from "../reducers/root";

const preloadedState = {
  chatroom: "",
  messages: []
};

export default createStore(rootReducer, preloadedState);
