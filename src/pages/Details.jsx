import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { BiDumbbell } from 'react-icons/bi'
import { GiMuscleUp } from 'react-icons/gi'
import { BiBody } from 'react-icons/bi'

import ExerciseItem from '../components/ExerciseItem'

export default function Details({ exercises, onAddToWorkout }) {
  const { id } = useParams()

  const selectedExercise = exercises.find(e => e.id === id)

  const similiarExercises = exercises
    .filter(e => e.bodyPart === selectedExercise.bodyPart)
    .slice(0, 3)

  return (
    <div
      className="section"
      css={css`
        padding: 1rem;
        max-width: var(--max-width);
        margin: 8rem auto 0;

        h3 {
          text-transform: capitalize;
          margin-bottom: 0.25rem;
        }

        img {
          border-radius: var(--border-radius);
        }

        .stats {
          margin: 2rem 0;
        }

        .item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0.5rem 0;
        }

        .icon {
          background: var(--color-primary);
          border-radius: 50%;
          color: var(--color-light);
          font-size: 2rem;
          padding: 0.25rem;
        }

        @media screen and (min-width: 768px) {
          .header {
            display: grid;
            align-items: center;
            gap: 1rem;
            grid-template-columns: 1fr 1fr;
          }

          .exercises {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;

            .item {
              margin: 0;
            }
          }
        }
      `}
    >
      <div className="header">
        <img src={selectedExercise.image} alt={selectedExercise.name} />
        <div className="info">
          <h3>{selectedExercise.name}</h3>
          <p>
            This is exercise targets your {selectedExercise.muscleTarget} and is
            great for the {selectedExercise.bodyPart} part of the body. It's
            recommended to use {selectedExercise.equipmentUsed}'s while
            conducting this exercise.
          </p>
          <div className="stats">
            <div className="item">
              <BiBody className="icon" />
              <p>{selectedExercise.bodyPart}</p>
            </div>
            <div className="item">
              <GiMuscleUp className="icon" />
              <p>{selectedExercise.muscleTarget}</p>
            </div>
            <div className="item">
              <BiDumbbell className="icon" />
              <p>{selectedExercise.equipmentUsed}</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h3>Similiar Exercies</h3>
        <div className="exercises">
          {similiarExercises.map(item => (
            <ExerciseItem
              className="item"
              key={item.id}
              item={item}
              onAddExercise={onAddToWorkout}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
