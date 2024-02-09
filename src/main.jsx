import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Confirmation from './components/Confirmation.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
