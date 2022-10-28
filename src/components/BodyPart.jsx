import { GiWeightLiftingUp } from 'react-icons/gi'
import { css } from '@emotion/react'

export default function BodyPart({ item }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        border: 1px solid var(--color-grey-light);
        cursor: pointer;
        padding: 1rem;
        border-radius: var(--border-radius);

        .icon {
          font-size: 3rem;
        }
      `}
    >
      <GiWeightLiftingUp className="icon" />
      <h5>{item}</h5>
    </div>
  )
}
