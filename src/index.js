import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();