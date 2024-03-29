import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);