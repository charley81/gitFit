import { css } from '@emotion/react'

import ExerciseItem from '../components/ExerciseItem'

export default function Workout({ workoutList, onRemoveExercise }) {
  if (workoutList.length) {
    return (
      <div
        className="section"
        css={css`
          max-width: var(--max-width);
          padding: 1rem;
          margin: 4rem auto 0;
        `}
      >
        {workoutList.map(item => (
          <ExerciseItem
            key={item.id}
            item={item}
            onRemoveExercise={onRemoveExercise}
          />
        ))}
      </div>
    )
  } else {
    return (
      <div
        className="section none"
        css={css`
          text-align: center;
        `}
      >
        <h1>No workouts added</h1>
      </div>
    )
  }
}
