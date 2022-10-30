import { css } from '@emotion/react'
import ExerciseItem from './ExerciseItem'

export default function Exercises({ exercises, onAddToWorkout }) {
  const exerciseList = exercises.slice(0, 10)

  return (
    <section
      css={css`
        max-width: var(--max-width);
        padding: 1rem;
        margin: 0 auto;
      `}
    >
      {exerciseList.map(item => (
        <ExerciseItem
          key={item.id}
          item={item}
          onAddExercise={onAddToWorkout}
        />
      ))}
    </section>
  )
}
