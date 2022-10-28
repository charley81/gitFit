import { css } from '@emotion/react'

import BodyPart from './BodyPart'

export default function PartSelector({ bodyParts }) {
  return (
    <div>
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
