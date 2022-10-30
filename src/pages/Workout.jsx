import ExerciseItem from '../components/ExerciseItem'

export default function Workout({ workoutList }) {
  if (workoutList.length) {
    return (
      <div className="section">
        {workoutList.map(item => (
          <ExerciseItem key={item.id} item={item} />
        ))}
      </div>
    )
  } else {
    return (
      <div className="section">
        <h1>No workouts added</h1>
      </div>
    )
  }
}
