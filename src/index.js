import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "tachyons"
import $ from 'jquery';

import Popper from 'popper.js';

import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
