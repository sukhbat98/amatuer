import React from 'react';
import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from '@pages/Home';
import Manuals from '@pages/Manuals';
import Contact from '@pages/Contact';

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
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
