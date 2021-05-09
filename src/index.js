import React from 'react';
import { render } from 'react-dom';
import 'normalize-css';
import { GlobalStyles } from './global-styles';
import App from './App';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
      <GlobalStyles />
    </FirebaseContext.Provider>
  </>,

  document.getElementById('root')
);
