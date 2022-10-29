import ExerciseItem from '../components/ExerciseItem'

export default function Workout({ workoutList }) {
  console.log(workoutList)
  if (workoutList) {
    return (
      <div className="section">
        {workoutList.map(item => (
          <ExerciseItem key={item.id} item={item} />
        ))}
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
