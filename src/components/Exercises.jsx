import { css } from '@emotion/react'
import ExerciseItem from './ExerciseItem'

export default function Exercises({ exercises }) {
  const exerciseList = exercises.slice(0, 10)

  return (
    <section
      css={css`
        margin: 4rem 0;
      `}
    >
      {exerciseList.map(item => (
        <ExerciseItem key={item.id} item={item} />
      ))}
    </section>
  )
}
