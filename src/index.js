require('file-loader?name=[name].[ext]!./index.html');

import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import App from './App';

ReactDOM.render(
  // <RouterProvider router={router} />,
  <App />,
  document.getElementById('app')
);
