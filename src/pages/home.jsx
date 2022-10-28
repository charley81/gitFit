import { useEffect, useState } from 'react'
import { exerciseOptions, getData } from '../utilities/getData'

import Showcase from '../components/Showcase'
import PartSelector from '../components/partSelector'
import Exercises from '../components/Exercises'

export default function Home() {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('')

  const handleBodyPartChange = value => {
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

  return (
    <>
      <Showcase />
      <PartSelector
        bodyParts={bodyParts}
        bodyPart={bodyPart}
        onChange={handleBodyPartChange}
      />
      <Exercises exercises={exercises} />
    </>
  )
}
