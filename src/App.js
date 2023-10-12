import React, { Suspense, lazy } from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";

const Home = lazy(() => import("@pages/Home"))
const Manuals = lazy(() => import("@pages/Manuals"))
const Contact = lazy(() => import("@pages/Contact"))
const Event = lazy(() => import("@pages/Event"))
const Amatuer = lazy(() => import("@pages/Amatuer"))
const NotFound = lazy(() => import("@pages/NotFound"))

function App() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />}/>
          <Route path='/manuals' element={<Manuals />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/event' element={<Event />}/>
          <Route path='/amatuer' element={<Amatuer />}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
