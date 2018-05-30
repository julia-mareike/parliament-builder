export const updateVotes = (party, votes) => {
  return {
    type: 'UPDATE_VOTES',
    party,
    votes
  }
}

export const updateElectorates = (party, electorates) => {
  return {
    type: 'UPDATE_ELECTORATES',
    party,
    electorates
  }
}
