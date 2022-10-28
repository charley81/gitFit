import { useContext } from 'react'
import { css } from '@emotion/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import BodyPart from './BodyPart'

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext)
  return <AiOutlineArrowLeft onClick={() => scrollPrev()} className="arrow" />
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext)
  return <AiOutlineArrowRight onClick={() => scrollNext()} className="arrow" />
}

export default function BodyParts({ bodyParts }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <h3>Click a body part to get started</h3>
      <ul
        css={css`
          display: flex;
        `}
      >
        {bodyParts.map(item => (
          <BodyPart key={item} item={item} />
        ))}
      </ul>
    </ScrollMenu>
  )
}
