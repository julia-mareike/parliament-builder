import {combineReducers} from 'redux'

import {votes, electorates} from './votes'

export default combineReducers({
  votes,
  electorates
})
