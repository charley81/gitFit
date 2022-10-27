import { css } from '@emotion/react'

import BodyPart from './BodyPart'

export default function BodyParts({ bodyParts }) {
  return (
    <div
      css={css`
        margin: 4rem 0;

        h3 {
          text-align: center;
        }
      `}
    >
      <h3>Click a body part to get started</h3>
      <ul>
        {bodyParts.map(item => (
          <BodyPart key={item} item={item} />
        ))}
      </ul>
    </div>
  )
}
