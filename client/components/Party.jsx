import React from 'react'
import {connect} from 'react-redux'

const Party = (props) => {

  const handleChange = ({target}) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    props.update(target.type, target.name, value)
  }

  return (
    <div className='party'>
      <input type='checkbox' name={props.party} checked={props.electorates[props.party]} onChange={handleChange}/>
      {props.party}: {props.votes[props.party]}
      <br />
      <input type='range' min='0' max='100' step='0.1' name={props.party} value={props.votes[props.party]} onChange={handleChange}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    votes: state.votes,
    electorates: state.electorates
  }
}

export default connect(mapStateToProps)(Party)
