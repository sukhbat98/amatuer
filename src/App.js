import React from 'react';
import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from '@pages/Home';
import Manuals from '@pages/Manuals';
import Contact from '@pages/Contact';
import Event from '@pages/Event'
import Amatuer from '@pages/Amatuer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "manuals",
    element: <Manuals />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "event",
    element: <Event />
  },
  {
    path: "amatuer",
    element: <Amatuer />
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
