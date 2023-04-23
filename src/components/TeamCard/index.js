// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li>
      <Link to={`/team-matches/${id}`} className="team-link">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-head">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
