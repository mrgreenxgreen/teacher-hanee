import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import {  RouterProvider,  } from 'react-router-dom';
import {Router} from "./Routes/Router.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={Router} />
  </React.StrictMode>,
)
