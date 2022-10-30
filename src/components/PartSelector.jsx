import { useState } from 'react'
import { css } from '@emotion/react'

export default function PartSelector({
  bodyParts,
  bodyPart,
  onhandleValueChange
}) {
  return (
    <div
      css={css`
        max-width: var(--max-width);
        padding: 0 1rem;
        margin: 0 auto;

        label {
          display: block;
          width: 100%;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        select {
          display: block;
          width: 100%;
          padding: 1rem;
          border-radius: var(--border-radius);
          background: var(--color-light);
        }
      `}
    >
      <label htmlFor="part">Choose a Body Part</label>
      <select
        name="part"
        id="part"
        value={bodyPart}
        onChange={e => onhandleValueChange(e.target.value)}
      >
        <option value="all">All</option>
        {bodyParts.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
