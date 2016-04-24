export function setState(state, value) {
  return state.set('value', value)
}

export function increment(state) {
  const newState = state.updateIn(['value'], value=>value+1)
  console.log('\n\t Incrementing: ' +  newState + '\n')
  return newState
}

export function decrement(state) {

  const newState = state.updateIn(['value'], value=>value-1)
  console.log('\n\t Decrementing: ' +  newState + '\n')
  return newState

}
