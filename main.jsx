import React from 'react';
import {createRoot} from 'react-dom/client';
import { StoreApp } from './src/StoreApp';

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <StoreApp/>
  </React.StrictMode>
)