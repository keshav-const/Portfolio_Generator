// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <App />
  </React.StrictMode>
);
