import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DeliveryApp } from './DeliveryApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DeliveryApp />
    </BrowserRouter>
  </React.StrictMode>
)