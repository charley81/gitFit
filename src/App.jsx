import { useEffect, useState } from 'react'
import { exerciseOptions, getData } from './utilities/getData'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'
import Workout from './pages/Workout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ErrorPage from './pages/ErrorPage'

function App() {
  const [openNav, setOpenNav] = useState(false)
  const [workoutList, setWorkoutList] = useState([])
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('')

  console.log(workoutList)

  let newExercises

  if (bodyPart) {
    newExercises = exercises.filter(e => e.bodyPart === bodyPart)
  }

  function handleBodyPartChange(value) {
    setBodyPart(value)
  }

  useEffect(() => {
    const getExercises = async () => {
      const exerciseData = await getData(
        'https://exercises2.p.rapidapi.com/?count=100',
        exerciseOptions
      )
      setExercises(exerciseData)
    }
    getExercises()
  }, [])

  const bodyParts = Array.from(new Set(exercises.map(e => e.bodyPart)))

  function handleAddToWorkout(id) {
    const selectedExercise = exercises.find(e => e.id === id)
    setWorkoutList([...workoutList, selectedExercise])
  }

  function toggleSidebar() {
    setOpenNav(!openNav)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar openNav={openNav} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToWorkout={handleAddToWorkout}
              bodyPart={bodyPart}
              bodyParts={bodyParts}
              onBodyPartChange={handleBodyPartChange}
              exercises={exercises}
              newExercises={newExercises}
            />
          }
        />
        <Route
          path="/exercise/:id"
          element={<Details exercises={exercises} />}
        />
        ``{' '}
        <Route
          path="/workout"
          element={<Workout workoutList={workoutList} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
