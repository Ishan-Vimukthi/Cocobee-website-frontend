import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/ContactUs.jsx'
import Outlets from './pages/Outlets.jsx'
import Menu from './pages/Menu.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AdminLogin from './pages/AdminLogin.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/outlets" element={<Outlets/>} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/dashboard" element={<AdminLogin/>}/>
        <Route path="/admin" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
