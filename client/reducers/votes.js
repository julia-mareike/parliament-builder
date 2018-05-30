import {pastVotes} from '../past-votes'

export const votes = (state = pastVotes.votes, action) => {
  switch (action.type) {
    case 'UPDATE_VOTES':
      return {...state, [action.party]: action.votes}
    default:
      return state
  }
}

export const electorates = (state = pastVotes.electorates, action) => {
  switch (action.type) {
    case 'UPDATE_ELECTORATES':
      return {...state, [action.party]: action.electorates}
    default:
      return state
  }
}
