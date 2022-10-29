import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { BiDumbbell } from 'react-icons/bi'
import { GiMuscleUp } from 'react-icons/gi'
import { BiBody } from 'react-icons/bi'

export default function Details({ exercises }) {
  const { id } = useParams()
  const selectedExercise = exercises.find(e => e.id === id)

  return (
    <div
      className="section"
      css={css`
        padding: 1rem;

        img {
          border-radius: var(--border-radius);
        }
      `}
    >
      <img src={selectedExercise.image} alt={selectedExercise.name} />
      <h3>{selectedExercise.name}</h3>
      <p>
        This is exercise targets your {selectedExercise.muscleTarget} and is
        great for the {selectedExercise.bodyPart} part of the body. It's
        recommended to use {selectedExercise.equipmentUsed}'s while conducting
        this exercise.
      </p>
      <section className="info">
        <div className="item">
          <BiBody />
          <p>Body Part: {selectedExercise.bodyPart}</p>
        </div>
        <div className="item">
          <GiMuscleUp />
          <p>Muscle Target: {selectedExercise.muscleTarget}</p>
        </div>
        <div className="item">
          <BiDumbbell />
          <p>Equipment Used: {selectedExercise.equipmentUsed}</p>
        </div>
      </section>
    </div>
  )
}
