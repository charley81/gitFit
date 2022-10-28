import { useParams } from 'react-router-dom'

export default function Details({ exercises }) {
  const { id } = useParams()
  const selectedExercise = exercises.find(e => e.id === id)

  return (
    <div className="section">
      <h1>{selectedExercise.name}</h1>
      <img src={selectedExercise.image} alt="" />
    </div>
  )
}
