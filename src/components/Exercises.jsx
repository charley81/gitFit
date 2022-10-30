import { css } from '@emotion/react'
import ExerciseItem from './ExerciseItem'

export default function Exercises({
  exercises,
  onAddToWorkout,
  onRemoveExercise
}) {
  const exerciseList = exercises.slice(0, 10)

  return (
    <section
      css={css`
        max-width: var(--max-width);
        padding: 1rem;
        margin: 0 auto;

        @media screen and (min-width: 768px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
      `}
    >
      {exerciseList.map(item => (
        <ExerciseItem
          key={item.id}
          item={item}
          onAddExercise={onAddToWorkout}
          onRemoveExercise={onRemoveExercise}
        />
      ))}
    </section>
  )
}
