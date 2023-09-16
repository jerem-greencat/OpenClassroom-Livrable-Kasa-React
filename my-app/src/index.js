import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';
import FicheLogement from './Components/FicheLogement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/a-propos",
    element: <About/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
  {
    path: "/fiche",
    element: <FicheLogement/>,
  }

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);