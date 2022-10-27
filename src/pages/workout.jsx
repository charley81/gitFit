import React from 'react'

export default function Workout({ workouts }) {
  return (
    <div className="section">
      <h1>{workouts ? 'Workout Page' : 'No workouts added'}</h1>
    </div>
  )
}
