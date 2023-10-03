import React from 'react';
import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from './pages/Home';
import Manuals from './pages/Manuals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "manuals",
    element: <Manuals />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
