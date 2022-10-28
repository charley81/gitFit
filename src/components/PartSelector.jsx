import { css } from '@emotion/react'

export default function PartSelector({ bodyParts }) {
  return (
    <div
      css={css`
        margin: 1rem;

        label {
          display: block;
          width: 100%;
          margin-bottom: 0.25rem;
        }

        select {
          display: block;
          width: 100%;
          padding: 1rem;
        }
      `}
    >
      <label htmlFor="part">Choose a Body Part</label>
      <select name="part" id="part">
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
