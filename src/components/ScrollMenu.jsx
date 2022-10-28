import { css } from '@emotion/react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'

export default function BodyParts({ bodyParts }) {
  return (
    <ScrollMenu>
      <ul
        css={css`
          display: flex;
          justify-content: center;
          gap: 1rem;
        `}
      >
        {bodyParts.map(item => (
          <BodyPart key={item} item={item} />
        ))}
      </ul>
    </ScrollMenu>
  )
}
