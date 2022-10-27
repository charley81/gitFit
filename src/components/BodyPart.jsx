import { GiWeightLiftingUp } from 'react-icons/gi'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

export default function BodyPart({ item }) {
  return (
    <div>
      <GiWeightLiftingUp />
      <h4>{item}</h4>
    </div>
  )
}
