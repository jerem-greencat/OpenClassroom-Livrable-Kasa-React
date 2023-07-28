import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Home from './Components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);