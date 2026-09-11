import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import LiveAI from './LiveAI';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <LiveAI />
  </React.StrictMode>
);
