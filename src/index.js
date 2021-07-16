import React from 'react';
import ReactDOM from 'react-dom';
// import {BrouserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux'
import 'modern-normalize/modern-normalize.css';
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
    
        <App />
       
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


