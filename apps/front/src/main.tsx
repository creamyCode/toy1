import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import { RouterProvider } from 'react-router-dom';
import { router } from './main-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Normalize />
    <RouterProvider router={router} />
  </StrictMode>
);
