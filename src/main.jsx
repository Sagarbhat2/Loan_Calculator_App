import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
)
