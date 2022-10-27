import { css } from '@emotion/react'
import showcaseImg from '../assets/workout.png'

export default function Showcase() {
  return (
    <div
      className="section"
      css={css`
        position: relative;
        text-align: center;

        h1 {
          font-size: 4rem;
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translate(-50%, -50%);

          span {
            color: var(--color-primary);
          }
        }
      `}
    >
      <img src={showcaseImg} alt="" />
      <h1>
        git<span>Fit</span>
      </h1>
      <p>Accomplish more, feel better, get fit!</p>
    </div>
  )
}
