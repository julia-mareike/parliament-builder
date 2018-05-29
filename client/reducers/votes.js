import {pastVotes} from '../past-votes'

export const votes = (state = pastVotes.votes, action) => {
  switch (action.type) {
    case 'ADD_THING':
      return [
        ...state,
        {
          thing: action.thing
        }
      ]

    default:
      return state
  }
}

export const electorates = (state = pastVotes.electorates, action) => {
  switch (action.type) {
    case '___':
      return [
        ...state,
        {
          thing: action.thing
        }
      ]
    default:
      return state
  }
}
