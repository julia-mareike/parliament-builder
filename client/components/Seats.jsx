import React from 'react'
import {connect} from 'react-redux'
import {Doughnut} from 'react-chartjs-2'

import {saintLague, calculateVotes} from '../utils'

const Seats = props => {
  const totals = calculateVotes(props.electorates, props.votes)
  const allocations = saintLague(totals)
  const labels = allocations.map(party => {return party.party})
  const numbers = allocations.map(party => {return party.allocated})
  const data = {
    labels: labels,
    datasets: [{
      data: numbers,
      backgroundColor: [
      'blue',
      'red',
      'green',
      'black',
      'yellow',
      'grey'
      ]
    }]
  }
  return (
    <div>
      <Doughnut data={data}/>
      <ul>
        {allocations.map((party, idx) => {
          return <li key={idx} className='seats'>
            {party.party}: {party.allocated}
          </li>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    votes: state.votes,
    electorates: state.electorates
  }
}

export default connect(mapStateToProps)(Seats)