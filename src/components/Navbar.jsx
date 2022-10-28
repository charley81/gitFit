import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { CgMenuGridO } from 'react-icons/cg'
import { IoIosFitness } from 'react-icons/io'

export default function Navbar({ toggleSidebar }) {
  return (
    <nav
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        z-index: 1;

        .nav-center {
          width: 90vw;
          max-width: var(--max-width);
          margin: 0 auto;
        }

        .nav-header {
          display: flex;
          height: 100%;
          justify-content: space-between;
          align-items: center;

          a {
            color: var(--color-light);
          }
        }

        .logo {
          font-size: 2rem;
        }

        button {
          background: transparent;
          border: transparent;
        }

        .toggle-btn {
          color: var(--color-light);
          font-size: 2rem;
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            color: var(--color-primary);
          }
        }

        .section-links {
          display: none;
        }

        @media screen and (min-width: 900px) {
          .toggle-btn {
            display: none;
          }

          .section-links {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .section-links a {
            color: var(--color-light);
            cursor: pointer;
            transition: var(--transition);

            &:hover {
              color: var(--color-primary);
            }
          }

          .nav-center {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
          }
        }
      `}
    >
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <IoIosFitness className="logo" />
          </Link>

          <CgMenuGridO
            aria-label="toggle"
            type="button"
            className="toggle-btn"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="section-links">
          <Link to="/workout">
            <li>Workout</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
