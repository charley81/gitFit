import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'
import Workout from './pages/Workout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ErrorPage from './pages/ErrorPage'

function App() {
  const [openNav, setOpenNav] = useState(false)

  function toggleSidebar() {
    setOpenNav(!openNav)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar openNav={openNav} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Details />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
