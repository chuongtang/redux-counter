import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import { Store } from "./app/store";


// using Provider to provide our Redux store to all wrapped Components
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);