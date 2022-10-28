import { Link } from 'react-router-dom'
import { css } from '@emotion/react'

export default function ExerciseItem({ item }) {
  const { id, name, bodyPart, equipmentUsed } = item

  return (
    <Link
      to={`/exercise/${id}`}
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-grey-dark);
        padding: 1rem;
        border-radius: var(--border-radius);
        margin: 1rem 0;
        color: var(--color-light);
        margin: 1rem;

        .tags {
          display: flex;
          gap: 1rem;

          p {
            background: var(--color-dark);
            padding: 0.25rem;
            border-radius: var(--border-radius);
          }
        }
      `}
    >
      <h4>{name}</h4>
      <div className="tags">
        <p>{bodyPart}</p>
        <p>{equipmentUsed}</p>
      </div>
    </Link>
  )
}
