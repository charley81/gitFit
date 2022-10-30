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

  function handleRemoveFromWorkout(id) {
    setWorkoutList(workoutList.filter(w => w.id !== id))
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
              onRemoveExercise={handleRemoveFromWorkout}
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
          element={
            <Workout
              workoutList={workoutList}
              onRemoveExercise={handleRemoveFromWorkout}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
