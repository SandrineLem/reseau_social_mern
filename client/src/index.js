import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { applyMiddleware,createStore } from'redux';
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//dev Tools 
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore (
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
)

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
   
  document.getElementById('root')
);


