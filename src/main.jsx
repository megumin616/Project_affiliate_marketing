import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about/About.jsx'
import Product from './pages/product/Product.jsx'
import Contact from './pages/contact/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
