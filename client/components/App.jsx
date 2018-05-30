import React from 'react'
import {connect} from 'react-redux'
import {sum} from 'lodash'

import Party from './Party'
import Seats from './Seats'

import {updateVotes, updateElectorates} from '../actions'

const App = (props) => {
const percentage = sum(Object.values(props.votes)).toFixed(1)
  return (
    <div className='app-container'>
      <p>Hello</p>
      {Object.keys(props.votes).map((party, idx) => {
        return <Party party={party} key={idx} update={props.update} />
      })}
      {percentage}%
      {(Number(percentage) <= 100) && <Seats />}
      {/* <Seats /> */}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (type, party, data) => {
      type === 'checkbox'
        ? dispatch(updateElectorates(party, data))
        : dispatch(updateVotes(party, Number(data)))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    votes: state.votes,
    electorates: state.electorates
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
