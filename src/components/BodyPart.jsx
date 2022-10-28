import { GiWeightLiftingUp } from 'react-icons/gi'

export default function BodyPart({ item }) {
  return (
    <div>
      <GiWeightLiftingUp />
      <h4>{item}</h4>
    </div>
  )
}
