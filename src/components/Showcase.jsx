import { css } from '@emotion/react'
import showcaseImg from '../assets/workout.png'

export default function Showcase() {
  return (
    <div
      className="section"
      css={css`
        position: relative;
        text-align: center;

        .content {
          h1 {
            font-size: 6rem;
          }

          position: absolute;
          top: 15%;
          left: 50%;
          transform: translate(-50%, -50%);

          span {
            color: var(--color-primary);
          }
        }

        @media screen and (min-width: 768px) {
          .content {
            h1 {
              font-size: 8rem;

              span {
                font-size: 8rem;
              }
            }
          }

          img {
            height: 70vh;
          }
        }

        @media screen and (min-width: 1000px) {
          .content {
            h1 {
              font-size: 10rem;

              span {
                font-size: 10rem;
              }
            }
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
