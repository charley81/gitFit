import { Link } from 'react-router-dom'
import { css } from '@emotion/react'

export default function ExerciseItem({ item, onAddExercise }) {
  const { id, name, bodyPart, equipmentUsed } = item

  return (
    <Link
      to={`/exercise/${id}`}
      css={css`
        display: block;
        width: 100%;
        background: var(--color-grey-dark);
        border-radius: var(--border-radius);
        color: var(--color-light);
        margin: 1rem 0;
        padding: 1rem;

        h4 {
          text-transform: capitalize;
          margin-bottom: 0.25rem;
        }

        .tags {
          display: flex;

          p {
            margin-right: 1rem;
          }
        }

        button {
          cursor: pointer;
          background: var(--color-primary);
          border: 1px solid transparent;
          color: var(--color-dark);
          padding: 0.25rem;
          margin: 0.5rem 1rem 0 0;
          border-radius: var(--border-radius);
        }

        @media screen and (min-width: 600px) {
          .header {
            display: flex;
            justify-content: space-between;
          }
        }
      `}
    >
      <div className="header">
        <h3>{name}</h3>

        <div className="tags">
          <p>{bodyPart}</p>
          <p>{equipmentUsed}</p>
        </div>
      </div>

      <div className="buttons">
        <button
          onClick={e => {
            e.stopPropagation()
            e.preventDefault()
            onAddExercise(item.id)
          }}
        >
          Add to Workout
        </button>
        <button
          onClick={e => {
            e.stopPropagation()
            e.preventDefault()
            onAddExercise(item.id)
          }}
        >
          Remove from Workout
        </button>
      </div>
    </Link>
  )
}
