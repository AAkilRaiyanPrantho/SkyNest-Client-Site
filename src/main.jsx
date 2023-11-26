import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Routes/routes';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className="max-w-screen-2xl mx-auto">
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
