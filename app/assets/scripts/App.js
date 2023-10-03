import React from 'react';
import { createRoot } from 'react-dom/client';

import 'lazysizes'

import '../styles/styles.css';

import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';

// import MyReactComponent from './modules/MyReactComponent';

// const root = createRoot(document.getElementById("my-react-example"))
// root.render(<MyReactComponent />);

new MobileMenu();
new StickyHeader()
