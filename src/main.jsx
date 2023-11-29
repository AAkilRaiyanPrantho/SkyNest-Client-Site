import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Routes/routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Pages/AuthProviders/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
