import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/a-propos",
    element: <About/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);