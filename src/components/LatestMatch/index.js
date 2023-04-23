// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch
  return (
    <div className="latest-matches-con">
      <div className="first">
        <p className="competing-team-head">{competingTeam}</p>
        <p className="date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="logo"
      />
      <div className="second">
        <label htmlFor="first" className="label">
          First Innings
        </label>
        <p id="first" className="label-text">
          {firstInnings}
        </p>
        <label htmlFor="second" className="label">
          Second Innings
        </label>
        <p id="second" className="label-text">
          {secondInnings}
        </p>
        <label htmlFor="third" className="label">
          Man of the Match
        </label>
        <p id="third" className="label-text">
          {manOfTheMatch}
        </p>
        <label htmlFor="fourth" className="label">
          Umpires
        </label>
        <p id="fourth" className="label-text">
          {umpires}
        </p>
      </div>
    </div>
  )
}
export default LatestMatch
