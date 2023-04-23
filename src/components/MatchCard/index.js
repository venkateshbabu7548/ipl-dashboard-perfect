// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = matchCardDetails
  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="competing-team-head">{competingTeam}</p>
      <p>{result}</p>
      <p className={`match-status ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
