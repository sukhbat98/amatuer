import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// import my styles
import './styles.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
