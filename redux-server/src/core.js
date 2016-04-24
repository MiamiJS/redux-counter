export function setState(state, currentNumber) {
  return state.set('currentNumber', currentNumber)
}

export function increment(state) {
  return state.updateIn(['currentNumber'], currentNumber=>currentNumber+1)
}

export function decrement(state) {
  return state.updateIn(['currentNumber'], currentNumber=>currentNumber-1)
}
