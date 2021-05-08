import React from 'react';
import { render } from 'react-dom';
import 'normalize-css';
import { GlobalStyles } from './global-styles';
import App from './App';

render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
