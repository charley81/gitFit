import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'
import Workout from './pages/Workout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [openNav, setOpenNav] = useState(false)
  const [categories, setCategories] = useState([])

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
