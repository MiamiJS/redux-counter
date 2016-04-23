import {Map} from 'immutable'
export const INITIAL_STATE = Map({value:0})

export function setState(state, value) {
  console.log('\n\t Setting Initial State: ' + state + '\n')
  return state.set('value', value)
}

export function increment(state) {
  console.log('\n\t Going to Increment: ' +  state + '\n')
  return state.updateIn(['value'], value=>value+1)
}
export function decrement(state) {
  console.log('\n\t Going to Decrement: ' +  state + '\n')
  return state.updateIn(['value'], value=>value-1)
}
