import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Details from './pages/details'
import Workout from './pages/workout'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Details />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </div>
  )
}

export default App
