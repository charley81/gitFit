import { useEffect, useState } from 'react'
import { exerciseOptions, getData } from '../utilities/getData'

import Showcase from '../components/Showcase'
import ScrollMenu from '../components/ScrollMenu'
<<<<<<< HEAD
=======
import Exercises from '../components/Exercises'
>>>>>>> working

export default function Home() {
  const [exercises, setExercises] = useState([])

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

  return (
    <>
      <Showcase />
      <ScrollMenu bodyParts={bodyParts} />
<<<<<<< HEAD
=======
      <Exercises exercises={exercises} />
>>>>>>> working
    </>
  )
}
