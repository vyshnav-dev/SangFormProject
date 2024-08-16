import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { loadConfig } from './config.js'



// Load the configuration before rendering the app
loadConfig().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <React.StrictMode>

    <App />

    // </React.StrictMode>,
  )
});