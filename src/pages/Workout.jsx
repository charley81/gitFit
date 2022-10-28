import ExerciseItem from '../components/ExerciseItem'

export default function Workout({ workoutList }) {
  if (workoutList) {
    return (
      <div className="section">
        <h1>Workouts here</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>No workouts added</h1>
      </div>
    )
  }
}
