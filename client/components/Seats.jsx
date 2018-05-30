import React from 'react'
import {connect} from 'react-redux'

import {saintLague, calculateVotes} from '../utils'

const Seats = props => {
const totals = calculateVotes(props.electorates, props.votes)
const allocations = saintLague(totals)
  return (
    <ul>
      {allocations.map((party, idx) => {
        return <li key={idx} className='seats'>
          {party.party}: {party.allocated}
        </li>
      })}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    votes: state.votes,
    electorates: state.electorates
  }
}

export default connect(mapStateToProps)(Seats)