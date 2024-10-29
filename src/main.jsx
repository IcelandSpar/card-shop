import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter} from 'react-router-dom';

import './index.css'
import App from './App.jsx';
import Home from './Home.jsx';
import Shop from './Shop.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   }, {
//     path: '/shop',
//     element: <Shop/>
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
)
