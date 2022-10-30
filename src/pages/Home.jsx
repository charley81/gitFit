import Showcase from '../components/Showcase'
import PartSelector from '../components/PartSelector'
import Exercises from '../components/Exercises'

export default function Home({
  onAddToWorkout,
  bodyPart,
  bodyParts,
  onBodyPartChange,
  exercises,
  newExercises,
  onRemoveExercise
}) {
  return (
    <>
      <Showcase />
      <PartSelector
        bodyParts={bodyParts}
        bodyPart={bodyPart}
        onhandleValueChange={onBodyPartChange}
      />
      {newExercises ? (
        <Exercises
          exercises={newExercises}
          onAddToWorkout={onAddToWorkout}
          onRemoveExercise={onRemoveExercise}
        />
      ) : (
        <Exercises
          exercises={exercises}
          onAddToWorkout={onAddToWorkout}
          onRemoveExercise={onRemoveExercise}
        />
      )}
    </>
  )
}
