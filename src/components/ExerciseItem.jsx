import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { css } from '@emotion/react'

export default function ExerciseItem({
  item,
  onAddExercise,
  onRemoveExercise
}) {
  const [showMore, setShowMore] = useState(false)

  const { id, name, bodyPart, equipmentUsed } = item

  let location = useLocation()

  function handleMoreClick(e) {
    e.preventDefault()
    setShowMore(!showMore)
  }

  return (
    <Link
      to={`/exercise/${id}`}
      css={css`
        display: block;
        width: 100%;
        background: var(--color-grey-dark);
        border-radius: var(--border-radius);
        color: var(--color-light);
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

        .tracker {
          margin: 2rem 0;

          input {
            margin: 0 1rem 0 0.25rem;
            padding: 0.25rem;
            border-radius: var(--border-radius);
            outline: none;
            border: none;
          }
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
        {location.pathname === '/workout' ? (
          <div className="info">
            <div className="buttons">
              <button
                onClick={e => {
                  e.stopPropagation()
                  e.preventDefault()
                  onRemoveExercise(item.id)
                }}
              >
                Remove from Workout
              </button>
              <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} Tracker
              </button>
            </div>
            {showMore && (
              <form className="tracker">
                <label htmlFor="weight">
                  Weight lbs
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    onClick={e => e.preventDefault()}
                  />
                </label>
                <label htmlFor="reps">
                  Reps
                  <input
                    type="number"
                    id="reps"
                    name="reps"
                    onClick={e => e.preventDefault()}
                  />
                </label>
                <label htmlFor="sets">
                  Sets
                  <input
                    type="number"
                    id="sets"
                    name="sets"
                    onClick={e => e.preventDefault()}
                  />
                </label>
                <button type="submit" onClick={e => e.preventDefault()}>
                  Submit
                </button>
              </form>
            )}
          </div>
        ) : (
          <button
            onClick={e => {
              e.stopPropagation()
              e.preventDefault()
              onAddExercise(item.id)
            }}
          >
            Add to Workout
          </button>
        )}
      </div>
    </Link>
  )
}
