import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { createBrowserRouter, RouterProvider } from "react-router";

import { routes } from './routes/Routes.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);
