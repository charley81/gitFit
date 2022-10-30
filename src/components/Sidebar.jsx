import { Link } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { css } from '@emotion/react'

export default function Sidebar({ openNav, toggleSidebar }) {
  return (
    <aside
      className={openNav ? 'sidebar show-sidebar' : 'sidebar'}
      css={css`
        .sidebar-links li {
          opacity: 0;
          animation: slideRight 0.5s ease-in-out 0.3s forwards;
        }

        @keyframes slideRight {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .sidebar-links li a {
          display: block;
          font-size: 2rem;
          margin-bottom: 2rem;
          text-transform: capitalize;
          transition: var(--transition);
          text-align: center;
          color: var(--color-light);

          &:hover {
            color: var(--color-primary);
          }
        }

        button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
          color: var(--color-light);
          font-size: 2rem;
          background: transparent;
          border: transparent;
          transition: var(--transition);

          &:hover {
            color: var(--color-primary);
          }
        }
      `}
    >
      <button aria-label="close menu button">
        <CgClose type="button" className="close-btn" onClick={toggleSidebar} />
      </button>
      <ul className={openNav ? 'sidebar-links' : null}>
        <li>
          <Link to="/workout" onClick={toggleSidebar}>
            Workout
          </Link>
        </li>
      </ul>
    </aside>
  )
}
