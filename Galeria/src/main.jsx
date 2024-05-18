import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inicio from './routes/inicio';
import KennyPage from './routes/kenny';
import CartmanPage from './routes/cartman';
import ButtersPage from './routes/butters';
import KylePage from './routes/kyle';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    children: [
      {
        path: "/Kenny",
        element: <KennyPage/>,
      },
      {
        path: "/Cartman",
        element: <CartmanPage/>,
      },
      {
        path: "/Butters",
        element: <ButtersPage/>,
      },
      {
        path: "/Kyle",
        element: <KylePage/>,
      },
    ]
  },      

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
