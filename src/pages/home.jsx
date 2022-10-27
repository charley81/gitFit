import { useEffect, useState } from 'react'
import { exerciseOptions, getData } from '../utilities/getData'

import Showcase from '../components/Showcase'
import BodyParts from '../components/BodyParts'

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
      <BodyParts bodyParts={bodyParts} />
    </>
  )
}
