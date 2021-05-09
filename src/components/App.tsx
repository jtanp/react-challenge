import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";

import store from "../store/store";
import { Form, FormList } from "./";

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Form />
      <FormList />
    </div>
  </Provider>
);

export default hot(module)(App);
