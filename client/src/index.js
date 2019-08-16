import React from 'react';
import { render } from 'react-dom'
import './index.css';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
import "bootstrap/dist/css/bootstrap.css";
import dotenv from 'dotenv';
import App from './App';

dotenv.config();


const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
