import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Details from './pages/details'
import Workout from './pages/workout'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'

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
      </Routes>
    </>
  )
}

export default App
