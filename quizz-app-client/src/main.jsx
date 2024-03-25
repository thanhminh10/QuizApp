import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <SSRProvider>
        <App />
      </SSRProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
