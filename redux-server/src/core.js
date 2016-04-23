import {Map} from 'immutable'
export const INITIAL_STATE = Map({})

export function setState(state, value) {
  return state.set('value', value)
}

export function increment(state) {
  return state.updateIn(['value'], value=>value+1)
}
export function decrement(state) {
  return state.updateIn(['value'], value=>value-1)
}
