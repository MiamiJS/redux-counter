import {Map} from 'immutable'
import {setState, increment, decrement, fetchState} from './core'

export default function reducer(state=Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.currentNumber)
  case 'INCREMENT':
    return increment(state)
  case 'DECREMENT':
    return decrement(state)
  case 'CONFIG_REPLACE':
    return state.update('value', action.value) // note: we replace state entirely here
  case 'FIREBASE_REF_SET':
    return action.value
  }
  return state
}
