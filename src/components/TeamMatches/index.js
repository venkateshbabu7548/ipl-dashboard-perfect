// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TestMatches extends Component {
  state = {isLoading: true, teamDetails: {}}

  componentDidMount() {
    this.getTeamDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({teamDetails: updatedData, isLoading: false})
  }

  renderTeamDetails = () => {
    const {teamDetails} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = teamDetails

    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-details-con ${id}`}>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <div className="latest-con">
          <p>Latest Matches</p>
          <LatestMatch key={latestMatch.id} latestMatch={latestMatch} />
        </div>
        <ul className="recent-matches-con">
          {recentMatches.map(each => (
            <MatchCard key={each.id} matchCardDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>{isLoading ? this.renderLoader() : this.renderTeamDetails()}</div>
    )
  }
}
export default TestMatches
