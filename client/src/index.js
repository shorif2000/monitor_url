import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
//import { applyMiddleware, createStore, compose } from 'redux';
//import thunkMiddleware from 'redux-thunk';
//import rootReducer from './reducer/rootReducer';

//const configureStore = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));
//const configureStore = createStore(rootReducer);
const store = configureStore();

const renderApp = () =>
  render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
  );



if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
