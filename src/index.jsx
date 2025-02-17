import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ChakraProvider } from '@chakra-ui/react'

import { RouterProvider } from "react-router";

import { routes } from './routes/Routes.jsx';
import { CSSReset } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider>
      <RouterProvider router={routes}/>
      <CSSReset />  
      </ChakraProvider>
  </React.StrictMode>
);

