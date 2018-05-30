import {sum, values, findIndex, forEach, max as _max, indexOf} from 'lodash'

export function formula (votes, idx) {
  const result = votes / (idx * 2 + 1)
  return result
}

export function adjustVotes (list) {
  const subtotal = sum(values(list))
  const adjustedVotes = {}
  for (let party in list) {
    const newVote = (100 / subtotal) * list[party]
    adjustedVotes[party] = Number(newVote)
  }
  return adjustedVotes
}

export function createVoteObject (obj) {
  const array = []
  forEach(obj, (votes, party) => {
    if (votes > 0) {
      const newObject = {}
      newObject.party = party
      newObject.votes = votes
      newObject.adjusted = votes
      newObject.allocated = 0
      newObject.overhang = false
      array.push(newObject)
    }
  })
  return array
}

export function calculateVotes (electorates, rawVotes) {
  const overhang = []

  for (let party in rawVotes) {
    rawVotes[party] < 5 
    ? (!electorates[party] 
      ? rawVotes[party] = 0 
      : overhang.push([party, electorates[party]])) 
    : console.log('ok', party)
  }
  const proportional = adjustVotes(rawVotes)
  let allVotes = createVoteObject(proportional)
  for (let party of overhang) {
    const target = findIndex(allVotes, ['party', party[0]])
    if (allVotes[target]) {
    allVotes[target].allocated = 1
    allVotes[target].overhang = true
  }
}
  return allVotes
}

export function saintLague (totals, idx = 0, seats = 120) {
  if (seats > 0) {
    let array = []
    for (let party of totals) {
      const quotient = formula(party.adjusted, idx)
      array.push(quotient)
    }
    const max = _max(array)
    const current = indexOf(array, max)
    if (!totals[current].overhang) totals[current].allocated++
    totals[current].adjusted = formula(totals[current].votes, totals[current].allocated)
    saintLague(totals, idx++, --seats)
  }
  return totals
}
