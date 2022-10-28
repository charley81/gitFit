import { css } from '@emotion/react'
import showcaseImg from '../assets/workout.png'

export default function Showcase() {
  return (
    <div
      className="section"
      css={css`
        position: relative;
        text-align: center;
        margin-bottom: 4rem;

        .content {
          h1 {
            font-size: 4rem;s
          }

          position: absolute;
          top: 15%;
          left: 50%;
          transform: translate(-50%, -50%);

          span {
            color: var(--color-primary);
          }
        }
      `}
    >
      <img src={showcaseImg} alt="" />
      <div className="content">
        <h1>
          git<span>Fit</span>
        </h1>
      </div>
    </div>
  )
}
