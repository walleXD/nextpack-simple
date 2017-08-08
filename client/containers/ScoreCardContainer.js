import React from 'react'
import { connect } from 'react-redux'
import { number, func } from 'prop-types'

import { updateScore } from '../actions'
import ScoreCard from '../components/example/ScoreCard'

const mapStateToProps = state => ({
  score: state.example.score
})

const mapDispatchToProps = {
  updateScore
}

@connect(mapStateToProps, mapDispatchToProps)
class ScoreCardContainer extends React.Component {
  static propTypes = {
    score: number,
    updateScore: func
  }

  render = () =>
    <div>
      <ScoreCard
        score={this.props.score}
        update={this.props.updateScore} />
    </div>
}

export default ScoreCardContainer
