import { css } from '@emotion/react'

export default function Workout({ workouts }) {
  return (
    <div
      className="section"
      css={css`
        text-align: center;
      `}
    >
      <h1>{workouts ? 'Workout Page' : 'No workouts added'}</h1>
    </div>
  )
}
