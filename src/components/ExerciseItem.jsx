import { Link } from 'react-router-dom'
import { css } from '@emotion/react'

export default function ExerciseItem({ item, onAddExercise }) {
  const { id, name, bodyPart, equipmentUsed } = item

  return (
    <Link
      to={`/exercise/${id}`}
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        background: var(--color-grey-dark);
        padding: 1rem;
        border-radius: var(--border-radius);
        color: var(--color-light);
        margin: 1rem 0;

        h4 {
          text-transform: capitalize;
        }

        .tags {
          display: flex;

          p {
            border: 1px solid var(--color-light);
            font-size: 0.75rem;
            color: var(--color-light);
            padding: 0.25rem;
            border-radius: var(--border-radius);
          }
        }

        button {
          cursor: pointer;
          background: var(--color-primary);
          border: 1px solid transparent;
          color: var(--color-dark);
          padding: 0.25rem;
          margin-top: 0.5rem;
          border-radius: var(--border-radius);
        }
      `}
    >
      <div className="left-side">
        <h4>{name}</h4>
        <button
          onClick={e => {
            e.stopPropagation()
            e.preventDefault()
            onAddExercise(item.id)
          }}
        >
          Add to Workout
        </button>
      </div>

      <div className="tags">
        <p>{bodyPart}</p>
        <p>{equipmentUsed}</p>
      </div>
    </Link>
  )
}
