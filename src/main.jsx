/**
* Vite entry: mounts the React app into #root.
* StrictMode helps catch side‑effecty patterns in dev.
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // pulls variables.css + globals.css


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)