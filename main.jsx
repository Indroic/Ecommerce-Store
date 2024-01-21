import React from 'react';
import {createRoot} from 'react-dom/client';
import { AppRouter } from './src/AppRouter';
import {BrowserRouter} from 'react-router-dom'

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>
)