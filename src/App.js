import React from "react";
import { Provider } from "react-redux";
import "bulma/css/bulma.css";
import "./styles.css";
import store from "./store/store";
import ConnectedChatApp from "./containers/ConnectedChatApp";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedChatApp />
      </Provider>
    </div>
  );
}
