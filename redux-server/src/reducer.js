import {setState, increment, decrement, INITIAL_STATE} from './core'

export default function reducer(state=INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.value)
  case 'INCREMENT':
    return increment(state)
  case 'DECREMENT':
    return decrement(state)
  }
  return state
}
