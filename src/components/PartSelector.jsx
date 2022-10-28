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
        margin: 0 auto;

        label {
          display: block;
          width: 100%;
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
          font-weight: 700;
        }

        select {
          display: block;
          width: 100%;
          padding: 0.5rem;
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
        <option value=""></option>
        {bodyParts.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
