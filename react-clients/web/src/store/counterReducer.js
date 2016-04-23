import {Map} from 'immutable'
import {onIncrement, onDecrement} from '../actions/counterActions'

export default function(state = Map({}), action) {
  switch (action.type) {
    case 'SYNC_STATE':
      return state.merge(action.serverState)
    case 'INCREMENT':
      return state.updateIn(['value'], value=>value+1)
    case 'DECREMENT':
      return state.updateIn(['value'], value=>value-1)

  }
  return state
}
